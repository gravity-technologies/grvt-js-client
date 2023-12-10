import { customAlphabet } from 'nanoid'
import { WS_MINI_TICKER_RESPONSE_MAP, WS_ORDERBOOK_LEVELS_RESPONSE_MAP, WS_ORDER_RESPONSE_MAP, WS_RECENT_TRADE_RESPONSE_MAP, WS_RFQ_QUOTE_RESPONSE_MAP, WS_RFQ_RESPONSE_MAP, WS_TICKER_RESPONSE_MAP, type ECurrency, type EKind, type IMiniTicker, type IOrder, type IOrderbookLevels, type IPublicTrade, type IRfq, type IRfqQuote, type ITicker, type IWSMiniTickerResponse, type IWSOrderbookLevelsResponse, type IWSRecentTradeResponse, type IWSRfqQuoteResponse, type IWSRfqResponse, type IWSTickerResponse, type IWsOrderResponse } from '../interfaces'
import { Utils } from '../utils'
import { EStreamEndpoints, type EWsStreamParam } from './interfaces'

type TEntities = IMiniTicker | ITicker | IOrderbookLevels | IPublicTrade | IOrder | IRfq | IRfqQuote

type TStreamEndpoint = `${EStreamEndpoints}`

interface IParsedParams extends Omit<EWsStreamParam, 'kind' | 'underlying' | 'quote' | 'rate'> {
  kind?: Array<`${EKind}`>
  underlying?: Array<`${ECurrency}`>
  quote?: Array<`${ECurrency}`>
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
  reconnectStrategy?: ((retries: number) => number | Error)
}

export class WS {
  private _ws: WebSocket
  private _retries = 0
  private _connected = false
  private readonly _options: IOptions

  constructor (options: IOptions) {
    this._options = options
    this._ws = new WebSocket(this._options.url, this._options.protocols)
    this._bindWebSocketListeners()
  }

  private _connect () {
    this._ws = new WebSocket(this._options.url, this._options.protocols)
    this._bindWebSocketListeners()
  }

  private _bindWebSocketListeners () {
    this._ws.addEventListener('open', (e: Event) => {
      this._connected = true
      this._subscribeCurrentPairs()
    })
    this._ws.addEventListener('close', (e: CloseEvent) => {
      this._connected = false
      const retryTimeout = this._options.reconnectStrategy?.(++this._retries) ?? new Error('No reconnect strategy')
      if (typeof retryTimeout === 'number') {
        return setTimeout(() => {
          this._connect()
        }, retryTimeout)
      }

      throw retryTimeout
    })
    // this._ws.addEventListener('error', (e: Event) => {
    //   this.close()
    // })
    this._ws.addEventListener('message', (e: MessageEvent<string>) => {
      const message = JSON.parse(e.data, Utils.jsonReviverBigInt)
      if (['subscribe', 'unsubscribe'].includes(message.method)) {
        return
      }
      const stream = message.s as string
      const result = this._messageLiteToFull(message)
      const consumers = Object.values(this._pairs[stream] || {})
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
      rate: Math.min(
        Math.max(
          params.rate ? params.rate : 1000,
          200
        ),
        5000
      )
    }
  }

  private _paramsToKeyPairs (subscribeParams: TSubscribeParams) {
    return subscribeParams.reduce<string[]>((merged, { stream, stream_params: streamParams }) => {
      for (const kind of (streamParams.kind?.length ? streamParams.kind : [undefined])) {
        for (const underlying of (streamParams.underlying?.length ? streamParams.underlying : [undefined])) {
          for (const quote of (streamParams.quote?.length ? streamParams.quote : [undefined])) {
            if (stream.includes('.v1.mini')) {
              merged.push([
                stream,
                kind,
                underlying,
                quote,
                streamParams.rate ?? 1000
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.ticker')) {
              merged.push([
                stream,
                kind,
                underlying,
                quote,
                streamParams.rate ?? 1000,
                false // tried other values, but only false works
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.orderbook')) {
              merged.push([
                stream,
                kind,
                underlying,
                quote,
                streamParams.rate ?? 1000,
                streamParams.depth ?? 0
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.trades')) {
              merged.push([
                stream,
                kind,
                underlying,
                quote,
                0 // tried rate, but only 0 works
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.order')) {
              merged.push([
                stream.split('.').reverse().join('.'),
                BigInt(streamParams.sub_account_id ?? 0).toString(),
                kind,
                underlying,
                quote,
                streamParams.create_only ? 'create' : 'stat'
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.rfq')) {
              merged.push([
                stream.split('.').reverse().join('.'),
                BigInt(streamParams.sub_account_id ?? 0).toString()
              ].join('.').toLowerCase())
              continue
            } else if (stream.includes('.v1.rfq_quote')) {
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

  private _keyPairsToParams (pairedKey: string): TSubscribeParams | undefined {
    for (const streamEndpoint of Object.values(EStreamEndpoints)) {
      if (pairedKey.startsWith(streamEndpoint + '.')) {
        // const [kind, underlying, quote, rate, depthOrGreeks] = pairedKey.replace(streamEndpoint + '.', '').split('.')
        // return [{
        //   stream: streamEndpoint,
        //   stream_params: {
        //     kind: [String(kind).toUpperCase()] as EKind[],
        //     underlying: [String(underlying).toUpperCase()] as ECurrency[],
        //     quote: [String(quote).toUpperCase()] as ECurrency[],
        //     rate: Number(rate),
        //     depth: ['false', 'true'].includes(depthOrGreeks)
        //       ? undefined
        //       : Number(depthOrGreeks),
        //     greeks: ['false', 'true'].includes(depthOrGreeks)
        //       ? ['false', 'true'].indexOf(depthOrGreeks) === 1
        //       : undefined
        //   }
        // }]

        // const [kind, underlying, quote, rate, depthOrGreeks] = pairedKey.replace(streamEndpoint + '.', '').split('.')
        if (streamEndpoint.includes('.v1.mini')) {
          const [kind, underlying, quote, rate] = pairedKey.replace(streamEndpoint + '.', '').split('.')
          return [{
            stream: streamEndpoint,
            stream_params: {
              kind: [String(kind).toUpperCase()] as EKind[],
              underlying: [String(underlying).toUpperCase()] as ECurrency[],
              quote: [String(quote).toUpperCase()] as ECurrency[],
              rate: Number(rate)
            }
          }]
        } else if (streamEndpoint.includes('.v1.ticker')) {
          const [kind, underlying, quote, rate, greeks] = pairedKey.replace(streamEndpoint + '.', '').split('.')
          return [{
            stream: streamEndpoint,
            stream_params: {
              kind: [String(kind).toUpperCase()] as EKind[],
              underlying: [String(underlying).toUpperCase()] as ECurrency[],
              quote: [String(quote).toUpperCase()] as ECurrency[],
              rate: Number(rate),
              greeks: ['false', 'true'].indexOf(greeks) === 1
            }
          }]
        } else if (streamEndpoint.includes('.v1.orderbook')) {
          const [kind, underlying, quote, rate, depth] = pairedKey.replace(streamEndpoint + '.', '').split('.')
          return [{
            stream: streamEndpoint,
            stream_params: {
              kind: [String(kind).toUpperCase()] as EKind[],
              underlying: [String(underlying).toUpperCase()] as ECurrency[],
              quote: [String(quote).toUpperCase()] as ECurrency[],
              rate: Number(rate),
              depth: Number(depth) || 0
            }
          }]
        } else if (streamEndpoint.includes('.v1.trades')) {
          merged.push([
            stream,
            kind,
            underlying,
            quote,
            0 // tried rate, but only 0 works
          ].join('.').toLowerCase())
          continue
        } else if (streamEndpoint.includes('.v1.order')) {
          merged.push([
            stream.split('.').reverse().join('.'),
            BigInt(streamParams.sub_account_id ?? 0).toString(),
            kind,
            underlying,
            quote,
            streamParams.create_only ? 'create' : 'stat'
          ].join('.').toLowerCase())
          continue
        } else if (streamEndpoint.includes('.v1.rfq')) {
          merged.push([
            stream.split('.').reverse().join('.'),
            BigInt(streamParams.sub_account_id ?? 0).toString()
          ].join('.').toLowerCase())
          continue
        } else if (streamEndpoint.includes('.v1.rfq_quote')) {
          merged.push([
            stream.split('.').reverse().join('.'),
            BigInt(streamParams.sub_account_id ?? 0).toString()
          ].join('.').toLowerCase())
          continue
        }
      }
    }
  }

  private _sendSubscribe (subscribeParams: TSubscribeParams) {
    this._ws.send(JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method: 'subscribe',
      params: subscribeParams
    }, Utils.jsonReplacerBigInt))
  }

  private _sendUnSubscribe (subscribeParams: TSubscribeParams) {
    this._ws.send(JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method: 'unsubscribe',
      params: subscribeParams
    }, Utils.jsonReplacerBigInt))
  }

  /**
   * START: Pairs
   */

  private readonly _pairs: Record<string, Record<string, TMessageHandler>> = {}

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
      const unsubscribeParams = this._keyPairsToParams(pair)
      if (unsubscribeParams) {
        this._sendUnSubscribe(unsubscribeParams)
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
    if (message.s.includes('.v1.mini.')) {
      return (Utils.schemaMap(message, WS_MINI_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IWSMiniTickerResponse).f
    } else if (message.s.includes('.v1.ticker.')) {
      return (Utils.schemaMap(message, WS_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IWSTickerResponse).f
    } else if (message.s.includes('.v1.orderbook.')) {
      return (Utils.schemaMap(message, WS_ORDERBOOK_LEVELS_RESPONSE_MAP.LITE_TO_FULL) as IWSOrderbookLevelsResponse).f
    } else if (message.s.includes('.v1.trades.')) {
      return (Utils.schemaMap(message, WS_RECENT_TRADE_RESPONSE_MAP.LITE_TO_FULL) as IWSRecentTradeResponse).f
    } else if (message.s.includes('order.v1.')) { // TDG reverse compare with MDG
      return (Utils.schemaMap(message, WS_ORDER_RESPONSE_MAP.LITE_TO_FULL) as IWsOrderResponse).f
    } else if (message.s.includes('rfq.v1.')) { // TDG reverse compare with MDG
      return (Utils.schemaMap(message, WS_RFQ_RESPONSE_MAP.LITE_TO_FULL) as IWSRfqResponse).f
    } else if (message.s.includes('rfq_quote.v1.')) { // TDG reverse compare with MDG
      return (Utils.schemaMap(message, WS_RFQ_QUOTE_RESPONSE_MAP.LITE_TO_FULL) as IWSRfqQuoteResponse).f
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
      console.log('ws.ts:294', this._keyPairsToParams(pair))
    }
  }

  private async _subscribe (pair: string, subscribeParams: TSubscribeParams) {
    if (Object.keys(this._pairs[pair] || {}).length) {
      return
    }
    await this.connected()
    let _resolve: (value: void | PromiseLike<void>) => void
    const onPaired = (e: MessageEvent<string>) => {
      const params = JSON.parse(e.data, Utils.jsonReviverBigInt)?.results as TSubscribeParams
      if (!params) {
        return
      }
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
    return Utils.timeout(promise, 30000, new Error('Connect Timeout')).finally(() => {
      this._ws.removeEventListener('message', onPaired)
    })
  }

  /**
   * Only supports one pair for now
   */
  subscribe <T extends TStreamEndpoint>(options: {
    stream: T
    params: EWsStreamParam
  }, onMessage: TMessageHandler, onError?: (error: Error) => void) {
    const subscribeParams: TSubscribeParams = [{
      stream: this._parseStream(options.stream).replace(/^full\./, 'lite.'),
      stream_params: this._parseParams(options.params)
    }]
    const [pair] = this._paramsToKeyPairs(subscribeParams) // only allow one pair for now
    void this._subscribe(pair, subscribeParams)?.catch(onError)
    return this._addConsumer(pair, onMessage)
  }

  unsubscribe (consumerKey: string) {
    this._removeConsumer(consumerKey)
  }

  async connected (delay = 100) {
    if (this._connected) {
      return this
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.connected())
      }, delay)
    })
  }
}
