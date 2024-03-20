import { customAlphabet } from 'nanoid'
import {
  ECurrencyInt,
  EKind,
  EKindInt,
  WS_MINI_TICKER_RESPONSE_MAP,
  WS_ORDERBOOK_LEVELS_RESPONSE_MAP,
  WS_ORDER_RESPONSE_MAP,
  WS_PUBLIC_TRADES_RESPONSE_MAP,
  WS_RFQ_QUOTE_RESPONSE_MAP,
  WS_RFQ_RESPONSE_MAP,
  WS_TICKER_RESPONSE_MAP,
  type ECurrency,
  type IMiniTicker,
  type IOrder,
  type IOrderbookLevels,
  type IPublicTrade,
  type IRfq,
  type IRfqQuote,
  type ITicker,
  type IWSMiniTickerResponse,
  type IWSOrderbookLevelsResponse,
  type IWSPublicTradesResponse,
  type IWSRfqQuoteResponse,
  type IWSRfqResponse,
  type IWSTickerResponse,
  type IWsOrderResponse
} from '../interfaces'
import { JsonUtils, Utils } from '../utils'
import { EStreamEndpoints, type EWsStreamParam } from './interfaces'

type TEntities = IMiniTicker | ITicker | IOrderbookLevels | IPublicTrade | IOrder | IRfq | IRfqQuote

type TStreamEndpoint = `${EStreamEndpoints}`

interface IParsedParams extends Omit<EWsStreamParam, 'kind' | 'underlying' | 'quote' | 'rate' | 'expiration' | 'strike_price'> {
  kind?: Array<`${EKind}`>
  underlying?: Array<`${ECurrency}`>
  quote?: Array<`${ECurrency}`>
  expiration?: bigint[]
  strike_price?: bigint[]
  rate?: number
}

type TSubscribeParams = Array<{
  stream: string
  stream_params: IParsedParams
}>

type TMessageHandler = (data: TEntities) => void

interface IOptions {
  url: string | URL
  protocols?: string | string[]
  // timeout in ms
  timeout?: number
  reconnectStrategy?: ((retries: number) => number | Error)
}

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
      if (!message || ['subscribe', 'unsubscribe'].includes(message.method)) {
        return
      }
      const stream = message.s as string
      const result = this._messageLiteToFull(message)
      const consumers = Object.values(this._pairs[stream] || {})
      if (!consumers?.length) {
        console.log('TODO: send unsubscribe with stream'); return
      }
      if (result && consumers?.length) {
        for (const consumer of consumers) {
          typeof consumer === 'function' && consumer(result)
        }
      }
    })
  }

  private _parseStream (stream: TStreamEndpoint) {
    if (Object.values(EStreamEndpoints).includes(stream as EStreamEndpoints)) {
      return stream
    }
    throw new Error('Unknown stream')
  }

  private _parseParams (params: EWsStreamParam): IParsedParams {
    return {
      ...params,
      kind: params.kind ? [params.kind] : undefined,
      underlying: [params.underlying as ECurrency],
      quote: [params.quote as ECurrency],
      expiration: params.expiration ? [params.expiration] : undefined,
      strike_price: params.strike_price ? [params.strike_price] : undefined,
      rate: Math.min(
        Math.max(
          params.rate ? params.rate : 1000,
          200
        ),
        5000
      )
    }
  }

  /**
   * @see /backend/svc/marketdatagateway/client/websocket.go#generateRoomName
   */
  private _paramsToKeyPairs (subscribeParams: TSubscribeParams) {
    return subscribeParams.reduce<string[]>((merged, { stream, stream_params: streamParams }) => {
      for (const _kind of (streamParams.kind?.length ? streamParams.kind : [undefined])) {
        for (const _underlying of (streamParams.underlying?.length ? streamParams.underlying : [undefined])) {
          for (const _quote of (streamParams.quote?.length ? streamParams.quote : [undefined])) {
            const kind = typeof _kind === 'string'
              ? _kind
              : Utils.getKeyByValue(EKindInt, _kind) as string
            const underlying = typeof _underlying === 'string'
              ? _underlying
              : Utils.getKeyByValue(ECurrencyInt, _underlying) as string
            const quote = typeof _quote === 'string'
              ? _quote
              : Utils.getKeyByValue(ECurrencyInt, _quote) as string

            if (stream.includes('.v1.ticker')) {
              merged.push([
                stream,
                [
                  kind,
                  underlying,
                  quote,
                  [EKind.CALL, EKind.PUT, EKind.FUTURE].includes(kind as EKind) && streamParams.expiration,
                  [EKind.CALL, EKind.PUT].includes(kind as EKind) && streamParams.strike_price,
                  streamParams.rate ?? 1000
                ].filter(Boolean).join('-')
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.mini')) {
              merged.push([
                stream,
                [
                  kind,
                  underlying,
                  quote,
                  [EKind.CALL, EKind.PUT, EKind.FUTURE].includes(kind as EKind) && streamParams.expiration,
                  [EKind.CALL, EKind.PUT].includes(kind as EKind) && streamParams.strike_price,
                  streamParams.rate ?? 1000
                ].filter(Boolean).join('-')
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.orderbook')) {
              merged.push([
                stream,
                [
                  kind,
                  underlying,
                  quote,
                  [EKind.CALL, EKind.PUT, EKind.FUTURE].includes(kind as EKind) && streamParams.expiration,
                  [EKind.CALL, EKind.PUT].includes(kind as EKind) && streamParams.strike_price,
                  streamParams.rate ?? 1000,
                  streamParams.depth ?? 10,
                  streamParams.aggregate ?? 1
                ].filter(Boolean).join('-')
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.trades')) {
              merged.push([
                stream,
                [
                  kind,
                  underlying,
                  quote,
                  [EKind.CALL, EKind.PUT, EKind.FUTURE].includes(kind as EKind) && streamParams.expiration,
                  [EKind.CALL, EKind.PUT].includes(kind as EKind) && streamParams.strike_price
                ].filter(Boolean).join('-')
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.order')) {
              merged.push([
                stream.split('.').reverse().join('.'),
                [
                  BigInt(streamParams.sub_account_id ?? 0).toString(),
                  kind,
                  underlying,
                  quote,
                  [EKind.CALL, EKind.PUT, EKind.FUTURE].includes(kind as EKind) && streamParams.expiration,
                  [EKind.CALL, EKind.PUT].includes(kind as EKind) && streamParams.strike_price,
                  streamParams.create_only ? 'create' : 'stat'
                ].filter(Boolean).join('-')
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.rfq_quote')) {
              merged.push([
                stream.split('.').reverse().join('.'),
                BigInt(streamParams.sub_account_id ?? 0).toString()
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.rfq')) {
              merged.push([
                stream.split('.').reverse().join('.'),
                BigInt(streamParams.sub_account_id ?? 0).toString()
              ].join('.').toLowerCase())
              continue
            }
          }
        }
      }
      return merged
    }, [])
  }

  /**
   * Revert of _paramsToKeyPairs
   */
  private _getPairedParams (pairedKey: string): TSubscribeParams | undefined {
    return this._pairedParams[pairedKey]

    // for (const streamEndpoint of Object.values(EStreamEndpoints)) {
    //   if (
    //     !pairedKey.startsWith(streamEndpoint) && (
    //       !(pairedKey.startsWith('order.v1.') && streamEndpoint.endsWith('.v1.order')) &&
    //       !(pairedKey.startsWith('rfq_quote.v1.') && streamEndpoint.endsWith('.v1.rfq_quote')) &&
    //       !(pairedKey.startsWith('rfq.v1.') && streamEndpoint.endsWith('.v1.rfq'))
    //     )
    //   ) {
    //     continue
    //   }
    //   if (pairedKey.includes('.v1.ticker')) {
    //     const [kind, underlying, quote, rate/** , greeks */] = pairedKey.replace(streamEndpoint + '.', '').split('.')
    //     return [{
    //       stream: streamEndpoint,
    //       stream_params: {
    //         kind: [String(kind).toUpperCase()] as EKind[],
    //         underlying: [String(underlying).toUpperCase()] as ECurrency[],
    //         quote: [String(quote).toUpperCase()] as ECurrency[],
    //         rate: Number(rate)
    //       }
    //     }]
    //   } else if (pairedKey.includes('.v1.mini')) {
    //     const [kind, underlying, quote, rate] = pairedKey.replace(streamEndpoint + '.', '').split('.')
    //     return [{
    //       stream: streamEndpoint,
    //       stream_params: {
    //         kind: [String(kind).toUpperCase()] as EKind[],
    //         underlying: [String(underlying).toUpperCase()] as ECurrency[],
    //         quote: [String(quote).toUpperCase()] as ECurrency[],
    //         rate: Number(rate)
    //       }
    //     }]
    //   } else if (pairedKey.includes('.v1.orderbook')) {
    //     const [kind, underlying, quote, rate, depth] = pairedKey.replace(streamEndpoint + '.', '').split('.')
    //     return [{
    //       stream: streamEndpoint,
    //       stream_params: {
    //         kind: [String(kind).toUpperCase()] as EKind[],
    //         underlying: [String(underlying).toUpperCase()] as ECurrency[],
    //         quote: [String(quote).toUpperCase()] as ECurrency[],
    //         rate: Number(rate),
    //         depth: Number(depth) || 0
    //       }
    //     }]
    //   } else if (pairedKey.includes('.v1.trades')) {
    //     const [kind, underlying, quote, rate, limit] = pairedKey.replace(streamEndpoint + '.', '').split('.')
    //     return [{
    //       stream: streamEndpoint,
    //       stream_params: {
    //         kind: [String(kind).toUpperCase()] as EKind[],
    //         underlying: [String(underlying).toUpperCase()] as ECurrency[],
    //         quote: [String(quote).toUpperCase()] as ECurrency[],
    //         rate: Number(rate),
    //         // venue: 'all', // TODO
    //         limit: Number(limit) || 0
    //       }
    //     }]
    //   } else if (pairedKey.startsWith('order.v1.')) {
    //     const [subAccountId, kind, underlying, quote, create] = pairedKey.replace(/^order\.v1\.(full|lite)\./, '').split('.')
    //     return [{
    //       stream: streamEndpoint,
    //       stream_params: {
    //         sub_account_id: BigInt(subAccountId),
    //         kind: [String(kind).toUpperCase()] as EKind[],
    //         underlying: [String(underlying).toUpperCase()] as ECurrency[],
    //         quote: [String(quote).toUpperCase()] as ECurrency[],
    //         create_only: ['create', 'stat'].indexOf(create) === 0
    //       }
    //     }]
    //   } else if (pairedKey.startsWith('rfq_quote.v1.')) {
    //     const [subAccountId] = pairedKey.replace(/^rfq_quote\.v1\.(full|lite)\./, '').split('.')
    //     return [{
    //       stream: streamEndpoint,
    //       stream_params: {
    //         sub_account_id: BigInt(subAccountId)
    //       }
    //     }]
    //   } else if (pairedKey.startsWith('rfq.v1.')) {
    //     const [subAccountId] = pairedKey.replace(/^rfq\.v1\.(full|lite)\./, '').split('.')
    //     return [{
    //       stream: streamEndpoint,
    //       stream_params: {
    //         sub_account_id: BigInt(subAccountId)
    //       }
    //     }]
    //   }
    // }
  }

  private _sendSubscribe (subscribeParams: TSubscribeParams) {
    if (this._ws.readyState === 1) {
      this._ws.send(JSON.stringify({
        id: 1,
        jsonrpc: '2.0',
        method: 'subscribe',
        params: subscribeParams
      }, Utils.jsonReplacerBigInt))
    }
  }

  private _sendUnSubscribe (subscribeParams: TSubscribeParams) {
    if (this._ws.readyState === 1) {
      this._ws.send(JSON.stringify({
        id: 1,
        jsonrpc: '2.0',
        method: 'unsubscribe',
        params: subscribeParams
      }, Utils.jsonReplacerBigInt))
    }
  }

  /**
   * START: Pairs
   */

  private readonly _pairs: Record<string, Record<string, TMessageHandler>> = {}
  // use for unsubscribe
  private _pairedParams: Record<string, TSubscribeParams | undefined> = {}

  private _addConsumer (pair: string, onMessage: TMessageHandler) {
    if (!this._pairs[pair]) {
      this._pairs[pair] = {}
    }
    const key = Object.entries(this._pairs[pair]).find(
      ([, consumer]) => consumer === onMessage
    )?.[0]
    if (key) {
      return `${pair}_${key}` // already bound
    }
    const consumerKey = Date.now() + customAlphabet('abcdefghijklmnopqrstuvwxyz', 3)()
    this._pairs[pair][consumerKey] = onMessage
    return `${pair}_${consumerKey}`
  }

  private _removeConsumer (consumerKey: string) {
    const [pair, key] = consumerKey.split('_')
    if (!this._pairs[pair]) {
      return
    }
    const { [key]: _, ...keep } = this._pairs[pair]
    this._pairs[pair] = keep
    if (!Object.keys(keep).length) {
      const unsubscribeParams = this._getPairedParams(pair)
      if (unsubscribeParams) {
        this._sendUnSubscribe(unsubscribeParams)
        const { [pair]: _, ...keep } = this._pairedParams
        this._pairedParams = keep
      }
    }
  }

  /**
   * END: Pairs
   */

  private _messageLiteToFull (message: {
    s: string
    n: string
    f: TEntities
  }) {
    if (!message.s) {
      return
    }

    if (message.s.startsWith('full.')) {
      return message.f
    }

    if (message.s.includes('.v1.ticker.')) {
      return (Utils.schemaMap(message, WS_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IWSTickerResponse).f
    } else if (message.s.includes('.v1.mini.')) {
      return (Utils.schemaMap(message, WS_MINI_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IWSMiniTickerResponse).f
    } else if (message.s.includes('.v1.orderbook.')) {
      return (Utils.schemaMap(message, WS_ORDERBOOK_LEVELS_RESPONSE_MAP.LITE_TO_FULL) as IWSOrderbookLevelsResponse).f
    } else if (message.s.includes('.v1.trades.')) {
      return (Utils.schemaMap(message, WS_PUBLIC_TRADES_RESPONSE_MAP.LITE_TO_FULL) as IWSPublicTradesResponse).f
    } else if (message.s.includes('order.v1.')) {
      return (Utils.schemaMap(message, WS_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IWsOrderResponse).f
    } else if (message.s.includes('rfq_quote.v1.')) {
      return (Utils.schemaMap(message, WS_RFQ_QUOTE_RESPONSE_MAP.LITE_TO_FULL) as IWSRfqQuoteResponse).f
    } else if (message.s.includes('rfq.v1.')) {
      return (Utils.schemaMap(message, WS_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IWSRfqResponse).f
    }
  }

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
      const subscribeParams = this._getPairedParams(pair)
      if (subscribeParams?.length) {
        this._sendSubscribe(subscribeParams)
      }
    }
  }

  private async _subscribe (pair: string, subscribeParams: TSubscribeParams) {
    if (Object.keys(this._pairs[pair] || {}).length) {
      return
    }
    await this.ready()
    let _resolve: (value: void | PromiseLike<void>) => void
    const onPaired = (e: MessageEvent<string>) => {
      const _params = JsonUtils.parse(e.data, Utils.jsonReviverBigInt)?.results as TSubscribeParams
      if (!_params) {
        return
      }
      const params = Utils.pascalToSnake(_params)
      const [responsePair] = this._paramsToKeyPairs(params)
      if (responsePair === pair) {
        _resolve()
      }
    }
    const promise = new Promise<void>((resolve) => {
      _resolve = resolve
      this._ws.addEventListener('message', onPaired)
    })
    this._sendSubscribe(subscribeParams)
    return Utils.timeout(
      promise,
      this._options.timeout ?? 30000,
      new Error('Subscribe Timeout: ' + pair)
    ).finally(() => {
      this._ws.removeEventListener('message', onPaired)
    })
  }

  /**
   * Only supports one pair for now
   */
  subscribe <T extends TStreamEndpoint>(
    options: {
      stream: T
      params: EWsStreamParam
    },
    onMessage: TMessageHandler,
    onError?: (error: Error) => void
  ) {
    const subscribeParams: TSubscribeParams = [{
      // stream: this._parseStream(options.stream).replace(/^full\./, 'lite.'), // TODO: force all to lite
      stream: this._parseStream(options.stream).replace(/^lite\./, 'full.'),
      stream_params: this._parseParams(options.params)
    }]
    const [pair] = this._paramsToKeyPairs(subscribeParams) // only allow one pair for now
    void this._subscribe(pair, subscribeParams).catch(onError)
    if (!this._pairedParams[pair]) {
      this._pairedParams[pair] = subscribeParams
    }
    return this._addConsumer(pair, onMessage)
  }

  unsubscribe (consumerKey: string) {
    this._removeConsumer(consumerKey)
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
