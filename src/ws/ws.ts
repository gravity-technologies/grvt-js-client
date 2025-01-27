import {
  WS_CANDLESTICK_FEED_DATA_V_1_MAP,
  WS_DEPOSIT_FEED_DATA_V_1_MAP,
  WS_FILL_FEED_DATA_V_1_MAP,
  WS_MINI_TICKER_FEED_DATA_V_1_MAP,
  WS_ORDERBOOK_LEVELS_FEED_DATA_V_1_MAP,
  WS_ORDER_FEED_DATA_V_1_MAP,
  WS_ORDER_STATE_FEED_DATA_V_1_MAP,
  WS_POSITIONS_FEED_DATA_V_1_MAP,
  WS_TICKER_FEED_DATA_V_1_MAP,
  WS_TRADE_FEED_DATA_V_1_MAP,
  WS_TRANSFER_FEED_DATA_V_1_MAP,
  WS_WITHDRAWAL_FEED_DATA_V_1_MAP,
  type IDeposit,
  type IFill,
  type IOrder,
  type IOrderState,
  type IPositions,
  type ITransfer,
  type IWSCandlestickFeedDataV1,
  type IWSDepositFeedDataV1,
  type IWSFillFeedDataV1,
  type IWSMiniTickerFeedDataV1,
  type IWSOrderFeedDataV1,
  type IWSOrderStateFeedDataV1,
  type IWSPositionsFeedDataV1,
  type IWSSubscribeRequestV1Legacy,
  type IWSTickerFeedDataV1,
  type IWSTradeFeedDataV1,
  type IWSTransferFeedDataV1,
  type IWSWithdrawalFeedDataV1,
  type IWithdrawal
} from '../interfaces'
import { JsonUtils, StringUtils, Utils } from '../utils'
import {
  EStream,
  type IWSBookRequest,
  type IWSCandleRequest,
  type IWSMiniRequest,
  type IWSTdgDepositRequest,
  type IWSTdgFillRequest,
  type IWSTdgOrderRequest,
  type IWSTdgOrderStateRequest,
  type IWSTdgPositionRequest,
  type IWSTdgTransferRequest,
  type IWSTdgWithDrawalRequest,
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
  code?: number
  status?: number
}

type TEntities = Parameters<Required<TWSRequest>['onData']>[0]

type TEntityHasInstrument = Exclude<TEntities, IOrder | IOrderState | IDeposit | ITransfer | IWithdrawal>

interface IOptions {
  url: string | URL
  protocols?: string | string[]
  // timeout in ms
  timeout?: number
  reconnectStrategy?: ((retries: number) => number | Error)
}

export class WS {
  private _retries = 0
  private _connecting = true
  private readonly _version = 'v1'
  private readonly _options: IOptions

  private __ws: WebSocket | undefined

  private get _ws () {
    if (!this.__ws) {
      return this._createWs()
    }
    return this.__ws
  }

  constructor (options: IOptions) {
    this._options = options
  }

  private _createWs () {
    if (this.__ws) {
      this._close(this.__ws)
    }
    this._connecting = true
    this.__ws = new WebSocket(this._options.url, this._options.protocols)
    this._bindWebSocketListeners(this.__ws)
    return this.__ws
  }

  private _close (ws: WebSocket) {
    const close = () => {
      // force close
      ws.close()
      // if (ws.readyState !== WebSocket.CLOSED && ws.readyState !== WebSocket.CONNECTING) {
      //   ws.close()
      // }
    }
    ws.addEventListener('open', () => {
      close()
    })
    ws.addEventListener('message', () => {
      close()
    })
    ws.addEventListener('error', () => {
      close()
    })
    close()
  }

  private _bindWebSocketListeners (currentWs: WebSocket) {
    for (const onConnect of this._onConnects) {
      currentWs.addEventListener('open', onConnect)
    }
    for (const onClose of this._onCloses) {
      currentWs.addEventListener('close', onClose)
    }
    for (const onError of this._onErrors) {
      currentWs.addEventListener('error', onError)
    }

    const reconnect = () => {
      if (!this._connecting) {
        return
      }
      const retryTimeout = this._options.reconnectStrategy?.(++this._retries) ?? new Error('No reconnect strategy')
      if (typeof retryTimeout === 'number') {
        return setTimeout(() => {
          if (currentWs !== this.__ws) {
            this._close(currentWs)
            return
          }
          this._createWs()
        }, retryTimeout)
      }
      throw retryTimeout
    }
    currentWs.addEventListener('open', (e: Event) => {
      // only keep the latest ws
      if (currentWs !== this.__ws) {
        this._close(currentWs)
        return
      }
      this._subscribeCurrentPairs()
    })
    currentWs.addEventListener('close', () => {
      // only keep the latest ws
      if (currentWs !== this.__ws) {
        this._close(currentWs)
        return
      }
      reconnect()
    })
    currentWs.addEventListener('error', () => {
      // only keep the latest ws
      if (currentWs !== this.__ws) {
        this._close(currentWs)
        return
      }
      reconnect()
    })
    currentWs.addEventListener('message', (e: MessageEvent<string>) => {
      // only keep the latest ws
      if (currentWs !== this.__ws) {
        this._close(currentWs)
        return
      }
      // reset retries
      if (this._retries) {
        this._retries = 0
      }
      const message = JsonUtils.parse<IMessage>(
        e.data,
        JsonUtils.bigintReviver
      )

      /**
       * Ignore 400 status response messages
       */
      if (message.status === 400) {
        return
      }

      const stream = message.s = message.s?.replace?.(`${this._version}.`, '') as `${EStream}`
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

      const instrument = (result as IOrder)?.legs?.[0]?.instrument ?? (result as TEntityHasInstrument)?.instrument

      /**
       * Handle subscriptions with instrument
       */
      const consumers = instrument
        ? this._getInstrumentConsumers({ stream, instrument, result })
        : this._getNonInstrumentConsumers({ stream, result })
      if (!consumers?.length) {
        // There are delay in sending unsubscribe message so clients might receive messages after unsubscribing
        // console.log('TODO: send unsubscribe with by message:', message, result)
        return
      }
      if (result && consumers?.length) {
        for (const consumer of consumers) {
          typeof consumer === 'function' && consumer(result)
        }
      }
    })

    /**
     * Auto close after 10s of inactivity
     */
    let lastMessageAt = Date.now()
    const autoCloseDelay = 10 * 1000
    const autoCloseInterval = setInterval(() => {
      if (Date.now() - lastMessageAt > autoCloseDelay) {
        reconnect()
      }
    }, autoCloseDelay)

    /**
     * Heartbeat every 3s
     */
    const heartbeatDelay = 3 * 1000
    const heartbeat = () => {
      if (currentWs.readyState === WebSocket.OPEN && Date.now() - lastMessageAt > heartbeatDelay) {
        currentWs.send('ping')
      }
    }
    const heartbeatInterval = setInterval(heartbeat, heartbeatDelay)

    currentWs.addEventListener('message', (e: MessageEvent<string>) => {
      lastMessageAt = Date.now()
    })
    currentWs.addEventListener('close', () => {
      clearInterval(autoCloseInterval)
      clearInterval(heartbeatInterval)
    })
  }

  /**
   * Only use for TDG
   * Use for TEntities of STATE | DEPOSIT | TRANSFER | WITHDRAWAL streams
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

        const depositDestinationAccountId = (result as IDeposit).to_account_id?.toString(16)
        const transferSourceKey = [
          (result as ITransfer).from_account_id?.toString(16),
          (result as ITransfer).from_sub_account_id ? (result as ITransfer).from_sub_account_id?.toString() : 0
        ].filter(Boolean).join('-')
        const transferDestinationKey = [
          (result as ITransfer).to_account_id?.toString(16),
          (result as ITransfer).to_sub_account_id ? (result as ITransfer).to_sub_account_id?.toString() : 0
        ].filter(Boolean).join('-')
        const withdrawalFromAccountId = (result as IWithdrawal).from_account_id?.toString(16)
        switch (stream) {
          case EStream.STATE:
            return [...acc, ...Object.values(value)]
          case EStream.DEPOSIT:
            if (depositDestinationAccountId && key.endsWith(depositDestinationAccountId)) {
              return [...acc, ...Object.values(value)]
            }
            break
          case EStream.TRANSFER:
            if ((transferSourceKey && key.endsWith(transferSourceKey)) || (transferDestinationKey && key.endsWith(transferDestinationKey))) {
              return [...acc, ...Object.values(value)]
            }
            break
          case EStream.WITHDRAWAL:
            if (withdrawalFromAccountId && key.endsWith(withdrawalFromAccountId)) {
              return [...acc, ...Object.values(value)]
            }
            break
        }

        return acc
      }, []
    )
  }

  /**
   * Use for MDG/TDG
   * Use for TEntityHasInstrument
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

        const isTdg = [
          EStream.ORDER,
          // EStream.STATE,
          EStream.POSITION,
          EStream.FILL
          // EStream.DEPOSIT,
          // EStream.TRANSFER,
          // EStream.WITHDRAWAL,
        ].includes(stream as EStream)

        // MDG
        if (!isTdg) {
          return key.includes(instrument)
            ? [...acc, ...Object.values(value)]
            : acc
        }

        // TDG
        const subAccountId = String((result as IOrder | IPositions | IFill).sub_account_id)
        // const subAccountId = String((result as IPositions).sub_account_id)
        // const subAccountId = String((result as IFill).sub_account_id)
        const feed = this._parseStream({
          stream: stream as EStream.ORDER | EStream.POSITION | EStream.FILL,
          params: {
            sub_account_id: subAccountId,
            instrument
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

  private _parseStream (options: Omit<TWSRequest, 'onData' | 'onError'>) {
    const candleFeed = (params: IWSCandleRequest['params']): string => [
      params.instrument,
      [
        params.interval,
        params.type
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const bookDeltaFeed = (params: IWSBookRequest['params']): string => [
      params.instrument,
      [
        params.rate ?? 1000
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const bookFeed = (params: IWSBookRequest['params']): string => [
      params.instrument,
      [
        params.rate ?? 1000,
        params.depth ?? 10
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const miniFeed = (params: IWSMiniRequest['params']): string => [
      params.instrument,
      [
        params.rate ?? 1000
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const tickerFeed = (params: IWSTickerRequest['params']): string => [
      params.instrument,
      [
        params.rate ?? 1000
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const publicTradesFeed = (params: IWSTradeRequest['params']): string => [
      params.instrument,
      [
        params.limit ?? 500
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    /**
     * TDG
     */

    const fillFeed = (params: IWSTdgFillRequest['params']): string => [
      [
        params.sub_account_id,
        params.instrument
      ].filter(Boolean).join('-')
      // [
      //   params.createOnly
      // ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const orderFeed = (params: IWSTdgOrderRequest['params']): string => [
      [
        params.sub_account_id,
        params.instrument
      ].filter(Boolean).join('-')
      // [
      //   {
      //     all: 'a',
      //     createOnly: 'c',
      //     updateOnly: 'u'
      //   }[params.state_filter] || 'a'
      // ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const orderStateFeed = (params: IWSTdgOrderStateRequest['params']): string => [
      [
        params.sub_account_id,
        params.instrument
      ].filter(Boolean).join('-')
      // [
      //   {
      //     all: 'a',
      //     createOnly: 'c',
      //     updateOnly: 'u'
      //   }[params.state_filter] || 'a'
      // ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const positionFeed = (params: IWSTdgPositionRequest['params']): string => [
      [
        params.sub_account_id,
        params.instrument
      ].filter(Boolean).join('-')
      // [
      //   params.createOnly
      // ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

    const depositFeed = (params: IWSTdgDepositRequest['params']): string => {
      return params.main_account_id
    }

    const transferFeed = (params: IWSTdgTransferRequest['params']): string => {
      if (params.sub_account_id) {
        return [params.main_account_id, params.sub_account_id].join('-')
      }
      return params.main_account_id
    }

    const withdrawalFeed = (params: IWSTdgWithDrawalRequest['params']): string => {
      return params.main_account_id
    }

    const { stream, params } = options
    switch (stream) {
      case EStream.CANDLE:
        return {
          stream,
          feed: [candleFeed(params as IWSCandleRequest['params'])]
        }
      case EStream.ORDERBOOK_DELTA:
        return {
          stream,
          feed: [bookDeltaFeed(params as IWSBookRequest['params'])]
        }
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
          feed: [publicTradesFeed(params as IWSTradeRequest['params'])]
        }
      case EStream.ORDER:
        return {
          stream,
          feed: [orderFeed(params as IWSTdgOrderRequest['params'])]
        }
      case EStream.STATE:
        return {
          stream,
          feed: [orderStateFeed(params as IWSTdgOrderStateRequest['params'])]
        }
      case EStream.POSITION:
        return {
          stream,
          feed: [positionFeed(params as IWSTdgPositionRequest['params'])]
        }
      case EStream.FILL:
        return {
          stream,
          feed: [fillFeed(params as IWSTdgFillRequest['params'])]
        }
      case EStream.DEPOSIT:
        return {
          stream,
          feed: [depositFeed(params as IWSTdgDepositRequest['params'])]
        }
      case EStream.TRANSFER:
        return {
          stream,
          feed: [transferFeed(params as IWSTdgTransferRequest['params'])]
        }
      case EStream.WITHDRAWAL:
        return {
          stream,
          feed: [withdrawalFeed(params as IWSTdgWithDrawalRequest['params'])]
        }
      default:
        console.error('Unknown stream: ' + stream)
    }
  }

  private _messageLiteToFull (message: IMessage): undefined | TEntities {
    switch (message.s) {
      case EStream.CANDLE:
        return (Utils.schemaMap(message, WS_CANDLESTICK_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSCandlestickFeedDataV1).feed
      case EStream.ORDERBOOK_DELTA:
      case EStream.ORDERBOOK_SNAP:
        return (Utils.schemaMap(message, WS_ORDERBOOK_LEVELS_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSOrderFeedDataV1).feed
      case EStream.MINI_DELTA:
      case EStream.MINI_SNAP:
        return (Utils.schemaMap(message, WS_MINI_TICKER_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSMiniTickerFeedDataV1).feed
      case EStream.TICKER_DELTA:
      case EStream.TICKER_SNAP:
        return (Utils.schemaMap(message, WS_TICKER_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSTickerFeedDataV1).feed
      case EStream.TRADE:
        return (Utils.schemaMap(message, WS_TRADE_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSTradeFeedDataV1).feed
      case EStream.ORDER:
        return (Utils.schemaMap(message, WS_ORDER_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSOrderFeedDataV1).feed
      case EStream.STATE:
        return (Utils.schemaMap(message, WS_ORDER_STATE_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSOrderStateFeedDataV1).feed
      case EStream.POSITION:
        return (Utils.schemaMap(message, WS_POSITIONS_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSPositionsFeedDataV1).feed
      case EStream.FILL:
        return (Utils.schemaMap(message, WS_FILL_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSFillFeedDataV1).feed
      case EStream.DEPOSIT:
        return (Utils.schemaMap(message, WS_DEPOSIT_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSDepositFeedDataV1).feed
      case EStream.TRANSFER:
        return (Utils.schemaMap(message, WS_TRANSFER_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSTransferFeedDataV1).feed
      case EStream.WITHDRAWAL:
        return (Utils.schemaMap(message, WS_WITHDRAWAL_FEED_DATA_V_1_MAP.LITE_TO_FULL) as IWSWithdrawalFeedDataV1).feed
      default:
        console.error('Unknown message:', message)
    }
  }

  private _sendMessage (payload: IWSSubscribeRequestV1Legacy) {
    if (this._ws.readyState === WebSocket.OPEN) {
      this._ws.send(JSON.stringify({
        ...payload,
        stream: `${this._version}.${payload.stream}`
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
    const pairKey = this._getPair({ stream, feed })
    if (!this._pairs[pairKey]) {
      return
    }

    let needUnsubscribe = true
    const pairPrimary = pairKey.split('@')[0]
    for (const key of Object.keys(this._pairs)) {
      if (key.split('@')[0] !== pairPrimary) {
        continue
      }
      const primaryGroup = this._pairs[key]
      const { [consumerKey]: _, ...keep } = primaryGroup
      this._pairs[key] = keep
      if (Object.keys(keep).length) {
        needUnsubscribe = false
      }
    }

    if (needUnsubscribe) {
      this._sendMessage({
        method: 'unsubscribe',
        stream,
        feed: [feed]
      })
    }
  }

  setParams (params: Record<string, string>) {
    const url = new URL(this._options.url.toString())
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, value)
    }
    this._options.url = url
    this._createWs()
    return this
  }

  /**
   * END: Pairs
   */

  private readonly _onConnects: Array<() => void> = []
  onConnect (callback: () => void) {
    this._onConnects.push(callback)
    this._ws.addEventListener('open', callback)
    return () => {
      this._ws.removeEventListener('open', callback)
      this._onConnects.splice(this._onConnects.indexOf(callback), 1)
    }
  }

  private readonly _onCloses: Array<(e: CloseEvent) => void> = []
  onClose (callback: (e: CloseEvent) => void) {
    this._onCloses.push(callback)
    this._ws.addEventListener('close', callback)
    return () => {
      this._ws.removeEventListener('close', callback)
      this._onCloses.splice(this._onCloses.indexOf(callback), 1)
    }
  }

  private readonly _onErrors: Array<(e: Event) => void> = []
  onError (callback: (e: Event) => void) {
    this._onErrors.push(callback)
    this._ws.addEventListener('error', callback)
    return () => {
      this._ws.removeEventListener('error', callback)
      this._onErrors.splice(this._onErrors.indexOf(callback), 1)
    }
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

  private async _subscribe (pair: string, subscribePayload: IWSSubscribeRequestV1Legacy) {
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
      const responseStream = message.s?.replace?.(`${this._version}.`, '')
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
    const subscribePayload: IWSSubscribeRequestV1Legacy = {
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
    this._createWs()
    return this
  }

  disconnect () {
    if (this.__ws) {
      this._close(this.__ws)
      this.__ws = undefined
    }
    this._connecting = false
    return this
  }

  ready (delay = 100) {
    if (this._ws.readyState === WebSocket.OPEN) {
      return Promise.resolve(this)
    }
    if (this._ws.readyState === WebSocket.CLOSED) {
      return Promise.reject(new Error('WebSocket is closed'))
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.ready())
      }, delay)
    })
  }
}
