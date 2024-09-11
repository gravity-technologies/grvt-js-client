import {
  ECurrency,
  EKind,
  WS_CANDLESTICK_RESPONSE_MAP,
  WS_MINI_TICKER_RESPONSE_MAP,
  WS_ORDERBOOK_LEVELS_RESPONSE_MAP,
  WS_ORDER_RESPONSE_MAP,
  WS_ORDER_STATE_RESPONSE_MAP,
  WS_POSITIONS_RESPONSE_MAP,
  WS_PRIVATE_TRADE_RESPONSE_MAP,
  WS_PUBLIC_TRADES_RESPONSE_MAP,
  WS_TICKER_RESPONSE_MAP,
  WS_TRANSFER_FEED_DATA_V_1_DTO_MAP,
  type IOrder,
  type IOrderState,
  type ITransfer,
  type IWSCandlestickResponse,
  type IWSMiniTickerResponse,
  type IWSOrderbookLevelsResponse,
  type IWSPositionsResponse,
  type IWSPrivateTradeResponse,
  type IWSPublicTradesResponse,
  type IWSRequestV1,
  type IWSTickerResponse,
  type IWSTransferFeedDataV1DTO,
  type IWsOrderResponse,
  type IWsOrderStateResponse
} from '../interfaces'
import { JsonUtils, StringUtils, Utils } from '../utils'
import {
  EStrategyShort,
  EStream,
  type IWSBookRequest,
  type IWSCandleRequest,
  type IWSMiniRequest,
  type IWSTdgOrderRequest,
  type IWSTdgPositionRequest,
  type IWSTdgTradeRequest,
  type IWSTdgTransferRequest,
  type IWSTickerRequest,
  type IWSTradeRequest,
  type TMessageHandler,
  type TWSRequest
} from './interfaces'

interface IMessage {
  s: string
  n: bigint
  f?: TEntities
  s1?: Array<string | bigint>
}

type TEntities = Parameters<Required<TWSRequest>['onData']>[0]

interface IOptions {
  version?: `v${number}`
  url: string | URL
  protocols?: string | string[]
  // timeout in ms
  timeout?: number
  reconnectStrategy?: ((retries: number) => number | Error)
}

const SHORT_MONTHS = Object.freeze([
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
])

export class WS {
  private _retries = 0
  private _connecting = false
  private readonly _options: IOptions

  private __ws: WebSocket | undefined

  private get _ws () {
    if (!this.__ws) {
      return this._createWs()
    }
    return this.__ws
  }

  private set _ws (ws: WebSocket) {
    if (this.__ws?.readyState === 1) {
      this.__ws.close()
    }
    this.__ws = ws
  }

  constructor (options: IOptions) {
    this._options = {
      ...options,
      version: options.version ?? 'v1'
    }
  }

  private _createWs () {
    this._ws = new WebSocket(this._options.url, this._options.protocols)
    this._bindWebSocketListeners()
    return this._ws
  }

  /**
   * Only use for ITransfer | IOrderState
   */
  private _getNonInstrumentConsumers ({ result, stream }: {
    result: TEntities
    stream: `${EStream}`
  }) {
    return Object.entries(this._pairs).reduce<Array<TMessageHandler<TEntities>>>(
      (acc, [key, value]) => {
        if (!key.startsWith(`${stream}__`)) {
          return acc
        }

        const destinationAccountId = (result as ITransfer).to_account_id?.toString(16) ?? (result as ITransfer).to_sub_account_id?.toString()
        switch (stream) {
          case EStream.ORDER:
            // updateOnly
            if (key.endsWith('@u')) {
              return [...acc, ...Object.values(value)]
            }
            break
          case EStream.TRANSFER:
            if (destinationAccountId && key.endsWith(destinationAccountId)) {
              return [...acc, ...Object.values(value)]
            }
            break
        }

        return acc
      }, []
    )
  }

  /**
   * Use for TEntities not ITransfer | IOrderState
   */
  private _getInstrumentConsumers ({ result, stream, instrument }: {
    result: TEntities
    stream: `${EStream}`
    instrument: string
  }) {
    return Object.entries(this._pairs).reduce<Array<TMessageHandler<TEntities>>>(
      (acc, [key, value]) => {
        if (!key.startsWith(`${stream}__`)) {
          return acc
        }

        // MDG if no subAccountId
        const isTdg = key.match(new RegExp(`${stream}__([0-9]{1,})[-_]`))?.[1]
        if (!isTdg) {
          return key.includes(instrument)
            ? [...acc, ...Object.values(value)]
            : acc
        }

        // TDG
        const subAccountId = String((result as IOrder).sub_account_id)
        // const subAccountId = String((result as IPositions).sub_account_id)
        // const subAccountId = String((result as IPrivateTrade).sub_account_id)
        const kindDef = {
          [EStrategyShort.PERPETUAL]: EKind.PERPETUAL,
          [EStrategyShort.CALL]: EKind.CALL,
          [EStrategyShort.PUT]: EKind.PUT,
          [EStrategyShort.FUTURE]: EKind.FUTURE
        }
        const [underlying, quote, kind] = instrument.split('_') as [ECurrency, ECurrency, keyof typeof kindDef]
        const feed = this._parseStream({
          stream: stream as EStream.TRADE | EStream.ORDER | EStream.POSITION,
          params: {
            subAccountId,
            kind: kindDef[kind] ?? EKind.PERPETUAL,
            underlying,
            quote
          }
        })?.feed
        const tdgFeedPrefix = feed?.[0]?.split('@')?.[0]
        if (tdgFeedPrefix && key.startsWith(`${stream}__${tdgFeedPrefix}`)) {
          return [...acc, ...Object.values(value)]
        }

        return acc
      }, []
    )
  }

  private _bindWebSocketListeners () {
    this._ws.addEventListener('open', (e: Event) => {
      this._subscribeCurrentPairs()
    })
    this._ws.addEventListener('close', (e: CloseEvent) => {
      if (!this._connecting) {
        return
      }
      const retryTimeout = this._options.reconnectStrategy?.(++this._retries) ?? new Error('No reconnect strategy')
      if (typeof retryTimeout === 'number') {
        return setTimeout(this._createWs.bind(this), retryTimeout)
      }
      throw retryTimeout
    })
    // this._ws.addEventListener('error', (e: Event) => {
    //   this.close()
    // })
    this._ws.addEventListener('message', (e: MessageEvent<string>) => {
      const message = JsonUtils.parse<IMessage>(
        e.data,
        JsonUtils.bigintReviver
      )
      const stream = message.s = message.s?.replace?.(`${this._options.version}.`, '') as `${EStream}`
      const result = this._messageLiteToFull(message)
      // no entity found
      if (!result) {
        // if no entity found and not a subscription message
        if (!message.s1?.length) {
          console.error('Error: something went wrong with message', message)
        }
        return
      }
      if (!stream) {
        console.error('Error: cannot parse stream or feed from message', message)
        return
      }

      const instrument = (result as IOrder)?.legs?.[0]?.instrument ?? (result as Exclude<typeof result, ITransfer | IOrderState>)?.instrument

      /**
       * Handle subscriptions with instrument
       */
      const consumers = instrument
        ? this._getInstrumentConsumers({ stream, instrument, result })
        : this._getNonInstrumentConsumers({ stream, result })
      if (!consumers?.length) {
        console.log('TODO: send unsubscribe with by message:', message)
        return
      }
      if (result && consumers?.length) {
        for (const consumer of consumers) {
          typeof consumer === 'function' && consumer(result)
        }
      }
    })
  }

  private _parseExpiration (expiration?: Date): string {
    if (!expiration) {
      return ''
    }
    const dd = `0${expiration.getDate()}`.slice(-2)
    const mmm = SHORT_MONTHS[expiration.getMonth()]
    const yy = expiration.getFullYear().toString().slice(-2)
    return `${dd}${mmm}${yy}`
  }

  private _parseStrikePrice (strikePrice?: bigint, underlying?: `${ECurrency}`): string {
    if (!strikePrice || !underlying) {
      return ''
    }
    const multiplierRegex = [ECurrency.BTC, ECurrency.ETH].includes(underlying as ECurrency)
      ? /(\d{9})$/
      : /(\d{6})$/
    return strikePrice.toString().replace(multiplierRegex, '')
  }

  private _parseStream (options: Omit<TWSRequest, 'onData' | 'onError'>) {
    const candleFeed = (params: IWSCandleRequest['params']): string => [
      [
        params.underlying,
        params.quote,
        params.strategy
      ].filter(Boolean).join('_'),
      [
        params.interval.toLowerCase().replace(/_/g, ''),
        params.type.toLowerCase()
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const bookFeed = (params: IWSBookRequest['params']): string => [
      [
        params.underlying,
        params.quote,
        params.strategy,
        [EStrategyShort.CALL, EStrategyShort.PUT, EStrategyShort.FUTURE].includes(params.strategy as EStrategyShort) && this._parseExpiration(params.expiration),
        [EStrategyShort.CALL, EStrategyShort.PUT].includes(params.strategy as EStrategyShort) && this._parseStrikePrice(params.strikePrice, params.underlying)
      ].filter(Boolean).join('_'),
      [
        params.rate ?? 1000,
        params.depth ?? 10,
        params.aggregate ?? 1
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const miniFeed = (params: IWSMiniRequest['params']): string => [
      [
        params.underlying,
        params.quote,
        params.strategy,
        [EStrategyShort.CALL, EStrategyShort.PUT, EStrategyShort.FUTURE].includes(params.strategy as EStrategyShort) && this._parseExpiration(params.expiration),
        [EStrategyShort.CALL, EStrategyShort.PUT].includes(params.strategy as EStrategyShort) && this._parseStrikePrice(params.strikePrice, params.underlying)
      ].filter(Boolean).join('_'),
      [
        params.rate ?? 1000
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const tickerFeed = (params: IWSTickerRequest['params']): string => [
      [
        params.underlying,
        params.quote,
        params.strategy,
        [EStrategyShort.CALL, EStrategyShort.PUT, EStrategyShort.FUTURE].includes(params.strategy as EStrategyShort) && this._parseExpiration(params.expiration),
        [EStrategyShort.CALL, EStrategyShort.PUT].includes(params.strategy as EStrategyShort) && this._parseStrikePrice(params.strikePrice, params.underlying)
      ].filter(Boolean).join('_'),
      [
        params.rate ?? 1000
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const publicTradesFeed = (params: IWSTradeRequest['params']): string => [
      [
        params.underlying,
        params.quote,
        params.strategy,
        [EStrategyShort.CALL, EStrategyShort.PUT, EStrategyShort.FUTURE].includes(params.strategy as EStrategyShort) && this._parseExpiration(params.expiration),
        [EStrategyShort.CALL, EStrategyShort.PUT].includes(params.strategy as EStrategyShort) && this._parseStrikePrice(params.strikePrice, params.underlying)
      ].filter(Boolean).join('_'),
      [
        params.limit ?? 500
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    /**
     * TDG
     */

    const privateTradesFeed = (params: IWSTdgTradeRequest['params']): string => [
      [
        params.subAccountId,
        params.kind,
        params.underlying,
        params.quote
      ].filter(Boolean).join('_')
      // [
      //   params.createOnly
      // ].filter(Boolean).join('_')
    ].filter(Boolean).join('@')

    const orderFeed = (params: IWSTdgOrderRequest['params']): string => [
      [
        params.subAccountId,
        params.kind,
        params.underlying,
        params.quote
      ].filter(Boolean).join('_'),
      [
        {
          all: 'a',
          createOnly: 'c',
          updateOnly: 'u'
        }[params.state_filter] || 'a'
      ].filter(Boolean).join('_')
    ].filter(Boolean).join('@')

    const positionFeed = (params: IWSTdgPositionRequest['params']): string => [
      [
        params.subAccountId,
        params.kind,
        params.underlying,
        params.quote
      ].filter(Boolean).join('_')
      // [
      //   params.createOnly
      // ].filter(Boolean).join('_')
    ].filter(Boolean).join('@')

    const transferFeed = (params: IWSTdgTransferRequest['params']): string => {
      if (params.subAccountId) {
        return params.subAccountId
      }
      return params.mainAccountId as string
    }

    const { stream, params } = options
    switch (stream) {
      case EStream.CANDLE:
        return {
          stream,
          feed: [candleFeed(params as IWSCandleRequest['params'])]
        }
      case EStream.ORDERBOOK_DELTA:
      case EStream.ORDERBOOK_SNAP:
        return {
          stream,
          feed: [bookFeed(params as IWSBookRequest['params'])]
        }
      case EStream.MINI_DELTA:
      case EStream.MINI_SNAP:
        return {
          stream,
          feed: [miniFeed(params as IWSMiniRequest['params'])]
        }
      case EStream.TICKER_DELTA:
      case EStream.TICKER_SNAP:
        return {
          stream,
          feed: [tickerFeed(params as IWSTickerRequest['params'])]
        }
      case EStream.TRADE:
        return {
          stream,
          feed: [
            // if no subAccountId then it's public trade
            !(params as IWSTdgTradeRequest['params'])?.subAccountId
              ? publicTradesFeed(params as IWSTradeRequest['params'])
              : privateTradesFeed(params as IWSTdgTradeRequest['params'])
          ]
        }
      case EStream.ORDER:
        return {
          stream,
          feed: [orderFeed(params as IWSTdgOrderRequest['params'])]
        }
      case EStream.POSITION:
        return {
          stream,
          feed: [positionFeed(params as IWSTdgPositionRequest['params'])]
        }
      case EStream.TRANSFER:
        return {
          stream,
          feed: [transferFeed(params as IWSTdgTransferRequest['params'])]
        }
      default:
        console.error('Unknown stream: ' + stream)
    }
  }

  private _messageLiteToFull (message: IMessage): undefined | TEntities {
    switch (message.s) {
      case EStream.CANDLE:
        return (Utils.schemaMap(message, WS_CANDLESTICK_RESPONSE_MAP.LITE_TO_FULL) as IWSCandlestickResponse).f
      case EStream.ORDERBOOK_DELTA:
      case EStream.ORDERBOOK_SNAP:
        return (Utils.schemaMap(message, WS_ORDERBOOK_LEVELS_RESPONSE_MAP.LITE_TO_FULL) as IWSOrderbookLevelsResponse).f
      case EStream.MINI_DELTA:
      case EStream.MINI_SNAP:
        return (Utils.schemaMap(message, WS_MINI_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IWSMiniTickerResponse).f
      case EStream.TICKER_DELTA:
      case EStream.TICKER_SNAP:
        return (Utils.schemaMap(message, WS_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IWSTickerResponse).f
      case EStream.TRADE:
        // if no subAccountId then it's public trade
        return !(message as any)?.f?.sa
          ? (Utils.schemaMap(message, WS_PUBLIC_TRADES_RESPONSE_MAP.LITE_TO_FULL) as IWSPublicTradesResponse).f
          : (Utils.schemaMap(message, WS_PRIVATE_TRADE_RESPONSE_MAP.LITE_TO_FULL) as IWSPrivateTradeResponse).f
      case EStream.ORDER:
        // if has oi then it's full order
        if ((message as any)?.f?.oi) {
          return (Utils.schemaMap(message, WS_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IWsOrderResponse).f
        }
        return (Utils.schemaMap(message, WS_ORDER_STATE_RESPONSE_MAP.LITE_TO_FULL) as IWsOrderStateResponse).f
      case EStream.POSITION:
        return (Utils.schemaMap(message, WS_POSITIONS_RESPONSE_MAP.LITE_TO_FULL) as IWSPositionsResponse).f
      case EStream.TRANSFER:
        return (Utils.schemaMap(message, WS_TRANSFER_FEED_DATA_V_1_DTO_MAP.LITE_TO_FULL) as IWSTransferFeedDataV1DTO).feed
      default:
        console.error('Unknown message: ', message)
    }
  }

  private _sendMessage (payload: IWSRequestV1) {
    if (this._ws.readyState === 1) {
      this._ws.send(JSON.stringify({
        ...payload,
        stream: this._options.version !== 'v0'
          ? `${this._options.version}.${payload.stream}`
          : payload.stream
      }, JsonUtils.bigintReplacer))
    }
  }

  /**
   * START: Pairs
   */

  private readonly _pairs: Record<string, Record<string, TMessageHandler<TEntities>>> = {}

  private _getPair ({ stream, feed }: {
    stream: string
    feed: string
  }) {
    return `${stream}__${feed}`
  }

  private _parsePair (pair: string) {
    const [stream, feed] = pair.split('__')
    return {
      stream,
      feed,
      asset: feed?.split('@')?.[0]
    }
  }

  private _addConsumer (pair: string, onMessage: TMessageHandler<TEntities>) {
    if (!this._pairs[pair]) {
      this._pairs[pair] = {}
    }
    const key = Object.entries(this._pairs[pair]).find(
      ([, consumer]) => consumer === onMessage
    )?.[0]
    if (key) {
      return `${pair}__${key}` // already bound
    }
    const consumerKey = `${Date.now()}${StringUtils.randChars(3)}`
    this._pairs[pair][consumerKey] = onMessage
    return `${pair}__${consumerKey}`
  }

  private _removeConsumer (pairedConsumerKey: string) {
    const [stream, feed, consumerKey] = pairedConsumerKey.split('__')
    const pair = this._getPair({ stream, feed })
    if (!this._pairs[pair]) {
      return
    }
    const { [consumerKey]: _, ...keep } = this._pairs[pair]
    this._pairs[pair] = keep
    if (!Object.keys(keep).length) {
      this._sendMessage({
        method: 'unsubscribe',
        stream,
        feed: [feed]
      })
    }
  }

  /**
   * END: Pairs
   */

  onClose (callback: (e: CloseEvent) => void) {
    this._ws.addEventListener('close', callback)
    return this
  }

  onError (callback: (e: Event) => void) {
    this._ws.addEventListener('error', callback)
    return this
  }

  private _subscribeCurrentPairs () {
    const pairs = Object.keys(this._pairs)
    for (const pair of pairs) {
      const { stream, feed } = this._parsePair(pair)
      this._sendMessage({
        method: 'subscribe',
        stream,
        feed: [feed]
      })
    }
  }

  private async _subscribe (pair: string, subscribePayload: IWSRequestV1) {
    if (Object.keys(this._pairs[pair] || {}).length) {
      return
    }
    await this.ready()
    let _resolve: (value: void | PromiseLike<void>) => void
    const onPaired = (e: MessageEvent<string>) => {
      const message = JsonUtils.parse<IMessage>(
        e.data,
        JsonUtils.bigintReviver
      )
      if (!message?.s || !message?.s1?.length) {
        return
      }
      const responseStream = message.s?.replace?.(`${this._options.version}.`, '')
      const { stream, feed } = this._parsePair(pair)
      const asset = feed.split('@')[0]
      const subs = message.s1 // .map((s) => typeof s === 'bigint' ? `0x${s.toString(16)}` : s)
      const isResolved = stream === responseStream && (
        subs.includes(asset) ||
        subs.includes(asset.toLowerCase()) ||
        subs.includes(feed) ||
        subs.includes(feed.toLowerCase()) ||
        subs.includes(StringUtils.toBigint(feed))
      )
      if (isResolved) {
        _resolve()
      }
    }
    const promise = new Promise<void>((resolve) => {
      _resolve = resolve
      this._ws.addEventListener('message', onPaired)
    })
    this._sendMessage(subscribePayload)
    return Utils.timeout(
      promise,
      this._options.timeout ?? 30000,
      new Error('Subscribe Timeout: ' + pair)
    ).finally(() => {
      this._ws.removeEventListener('message', onPaired)
    })
  }

  /**
   * Only supports one feed
   */
  subscribe (_options: TWSRequest): string {
    const { onData: onMessage, onError, ...options } = _options
    const subscribePayload: IWSRequestV1 = {
      ...this._parseStream(options),
      method: 'subscribe'
    }
    const stream = subscribePayload.stream
    const feed = subscribePayload.feed?.[0] as string
    if (!stream || !feed) {
      throw new Error('Unknown stream or feed')
    }
    const pair = this._getPair({ stream, feed })
    void this._subscribe(pair, subscribePayload).catch(onError)
    return this._addConsumer(pair, onMessage as TMessageHandler<TEntities>)
  }

  unsubscribe (pairedConsumerKey: string) {
    this._removeConsumer(pairedConsumerKey)
    return this
  }

  connect () {
    if (!this._connecting) {
      this._connecting = true
      this._createWs()
    }
    return this
  }

  disconnect () {
    if (this._connecting) {
      this._connecting = false
      this._ws.close()
    }
    return this
  }

  ready (delay = 100) {
    if (this._ws.readyState === 1) {
      return Promise.resolve(this)
    }
    if (this._ws.readyState === 3) {
      return Promise.reject(new Error('WebSocket is closed'))
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.ready())
      }, delay)
    })
  }
}
