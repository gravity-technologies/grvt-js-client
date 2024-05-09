import { customAlphabet } from 'nanoid'
import {
  ECurrency,
  WS_CANDLESTICK_RESPONSE_MAP,
  WS_MINI_TICKER_RESPONSE_MAP,
  WS_ORDERBOOK_LEVELS_RESPONSE_MAP,
  WS_ORDER_RESPONSE_MAP,
  WS_PUBLIC_TRADES_RESPONSE_MAP,
  WS_TICKER_RESPONSE_MAP,
  type ICandlestick,
  type IMiniTicker,
  type IOrder,
  type IOrderbookLevels,
  type IPublicTrade,
  type IRfq,
  type IRfqQuote,
  type ITicker,
  type IWSCandlestickResponse,
  type IWSMiniTickerResponse,
  type IWSOrderbookLevelsResponse,
  type IWSPublicTradesResponse,
  type IWSRequestV1,
  type IWSTickerResponse,
  type IWsOrderResponse
} from '../interfaces'
import { JsonUtils, Utils } from '../utils'
import {
  EStrategyShort,
  EStream,
  type IWSBookRequest,
  type IWSCandleRequest,
  type IWSMiniRequest,
  type IWSTdgOrderRequest,
  type IWSTickerRequest,
  type IWSTradeRequest,
  type TWSRequest
} from './interfaces'

type TEntities = // all entities
                  IMiniTicker
                  | ITicker
                  | IOrderbookLevels
                  | IPublicTrade
                  | ICandlestick
                  | IOrder
                  | IRfq
                  | IRfqQuote
type TSupportedEntities = // all entities
                  IMiniTicker
                  | ITicker
                  | IOrderbookLevels
                  | IPublicTrade
                  | ICandlestick

type TMessageHandler<T> = (data: T) => void

interface IOptions {
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
    this._options = options
  }

  private _createWs () {
    this._ws = new WebSocket(this._options.url, this._options.protocols)
    this._bindWebSocketListeners()
    return this._ws
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
      const message = JsonUtils.parse(e.data, Utils.jsonReviverBigInt)
      const stream = message.s as string
      const result = this._messageLiteToFull(message)
      if (!result) {
        if (!(message.s1 as string[])?.length) {
          console.log('TODO: something went wrong with message', message)
        }
        return
      }
      const instrument = (result as IOrder).legs?.[0]?.instrument ?? (result as TSupportedEntities).instrument
      if (!stream || !instrument) {
        console.log('TODO: can\'t parse stream or feed from message', message)
        return
      }
      // const pair = this._getPair({ stream, feed })
      // const consumers = Object.values(this._pairs[pair] || {})
      const consumers = Object.entries(this._pairs).reduce<Array<TMessageHandler<TEntities>>>(
        (acc, [key, value]) => key.startsWith(`${stream}__`) && key.includes(instrument)
          ? [...acc, ...Object.values(value)]
          : acc,
        []
      )
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

  /**
   * TODO: implement EStream.POSITION / EStream.TRADE
   */
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

    const tradesFeed = (params: IWSTradeRequest['params']): string => [
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

    const orderFeed = (params: IWSTdgOrderRequest['params']): string => [
      [
        params.subAccountId,
        params.kind,
        params.underlying,
        params.quote
      ].filter(Boolean).join('_'),
      [
        params.createOnly
      ].filter(Boolean).join('-')
    ].filter(Boolean).join('@')

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
          feed: [tradesFeed(params as IWSTradeRequest['params'])]
        }
      case EStream.ORDER:
        return {
          stream,
          feed: [orderFeed(params as IWSTdgOrderRequest['params'])]
        }
      default:
        throw new Error('Unknown stream')
    }
  }

  private _messageLiteToFull (message: {
    s: string
    n: string
    f: TEntities
  }): undefined | TEntities {
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
        return (Utils.schemaMap(message, WS_PUBLIC_TRADES_RESPONSE_MAP.LITE_TO_FULL) as IWSPublicTradesResponse).f
      case EStream.ORDER:
        return (Utils.schemaMap(message, WS_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IWsOrderResponse).f
      default:
        throw new Error('Unknown stream')
    }
  }

  private _sendMessage (payload: IWSRequestV1) {
    if (this._ws.readyState === 1) {
      this._ws.send(JSON.stringify(payload, Utils.jsonReplacerBigInt))
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
    const consumerKey = Date.now() + customAlphabet('abcdefghijklmnopqrstuvwxyz', 3)()
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
      const response = JsonUtils.parse<{
        s: string
        s1: string[]
      }>(e.data, Utils.jsonReviverBigInt)
      if (!response?.s || !response?.s1?.length) {
        return
      }
      const { stream, feed } = this._parsePair(pair)
      const asset = feed.split('@')[0]
      if (stream === response.s && response.s1.includes(asset)) {
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
