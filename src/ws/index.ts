import { customAlphabet } from 'nanoid'
import { WS_MINI_TICKER_RESPONSE_MAP, WS_ORDERBOOK_LEVELS_RESPONSE_MAP, WS_RECENT_TRADE_RESPONSE_MAP, WS_TICKER_RESPONSE_MAP, type ECurrency, type EInstrumentSettlementPeriod, type IMiniTicker, type IOrderbookLevels, type IPublicTrade, type ITicker, type IWSMiniTickerResponse, type IWSOrderbookLevelsResponse, type IWSRecentTradeResponse, type IWSTickerResponse } from '../interfaces'
import { Utils } from '../utils'
import { StreamEndpoints, type EStreamEndpoints, type EWsStreamParam } from './interfaces'

type TStreamEndpoint = EStreamEndpoints | typeof StreamEndpoints[number]
interface IParsedParams extends Omit<EWsStreamParam, 'kind' | 'underlying' | 'quote' | 'rate'> {
  kind: EInstrumentSettlementPeriod[]
  underlying: ECurrency[]
  quote: ECurrency[]
  rate: number
}
type TSubscribeParams = Array<{
  stream: string
  stream_params: IParsedParams
}>
type TMessageHandler = (data: IMiniTicker | ITicker | IOrderbookLevels | IPublicTrade) => void

export class WS extends WebSocket {
  private _connected = false

  private _parseStream (stream: TStreamEndpoint) {
    if (StreamEndpoints.includes(stream)) {
      return stream
    }
    throw new Error('Unknown stream')
  }

  private _parseParams (params: EWsStreamParam): IParsedParams {
    return {
      ...params,
      kind: [params.kind],
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
      for (const kind of streamParams.kind) {
        for (const underlying of streamParams.underlying) {
          for (const quote of streamParams.quote) {
            const pairsArgs: Array<string | number | boolean> = [stream, kind, underlying, quote]
            if (stream.includes('.v1.mini.')) {
              pairsArgs.push(streamParams.rate)
            } else if (stream.includes('.v1.ticker.')) {
              pairsArgs.push(streamParams.rate)
              pairsArgs.push(false) // tried other values, but only false works
            } else if (stream.includes('.v1.orderbook.')) {
              pairsArgs.push(streamParams.rate)
              pairsArgs.push(streamParams.depth ?? 0)
            } else if (stream.includes('.v1.trades.')) {
              pairsArgs.push(0) // tried rate, but only 0 works
            }
            merged.push(pairsArgs.join('.').toLowerCase())
          }
        }
      }
      return merged
    }, [])
  }

  private _keyPairsToParams (pairedKey: string): TSubscribeParams | undefined {
    for (const streamEndpoint of StreamEndpoints) {
      if (pairedKey.startsWith(streamEndpoint + '.')) {
        const [kind, underlying, quote, rate, depthOrGreeks] = pairedKey.replace(streamEndpoint + '.', '').split('.')
        return [{
          stream: streamEndpoint,
          stream_params: {
            kind: [String(kind).toUpperCase()] as EInstrumentSettlementPeriod[],
            underlying: [String(underlying).toUpperCase()] as ECurrency[],
            quote: [String(quote).toUpperCase()] as ECurrency[],
            rate: Number(rate),
            depth: ['false', 'true'].includes(depthOrGreeks)
              ? undefined
              : Number(depthOrGreeks),
            greeks: ['false', 'true'].includes(depthOrGreeks)
              ? ['false', 'true'].indexOf(depthOrGreeks) === 1
              : undefined
          }
        }]
      }
    }
  }

  private _sendSubscribe (subscribeParams: TSubscribeParams) {
    this.send(JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method: 'subscribe',
      params: subscribeParams
    }))
  }

  private _sendUnSubscribe (subscribeParams: TSubscribeParams) {
    this.send(JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method: 'unsubscribe',
      params: subscribeParams
    }))
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
    const consumerKey = customAlphabet('abcdefghijklmnopqrstuvwxyz', 5)()
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
    f: any
  }): IMiniTicker | ITicker | IOrderbookLevels | IPublicTrade | undefined {
    if (message.s.includes('.v1.mini.')) {
      return (Utils.schemaMap(message, WS_MINI_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IWSMiniTickerResponse).f
    } else if (message.s.includes('.v1.ticker.')) {
      return (Utils.schemaMap(message, WS_TICKER_RESPONSE_MAP.LITE_TO_FULL) as IWSTickerResponse).f
    } else if (message.s.includes('.v1.orderbook.')) {
      return (Utils.schemaMap(message, WS_ORDERBOOK_LEVELS_RESPONSE_MAP.LITE_TO_FULL) as IWSOrderbookLevelsResponse).f
    } else if (message.s.includes('.v1.trades.')) {
      return (Utils.schemaMap(message, WS_RECENT_TRADE_RESPONSE_MAP.LITE_TO_FULL) as IWSRecentTradeResponse).f
    }
  }

  constructor (url: string | URL, protocols?: string | string[]) {
    super(url, protocols)
    this.addEventListener('open', (e: Event) => {
      this._connected = true
    })
    this.addEventListener('close', (e: CloseEvent) => {
      this._connected = false
    })
    // this.addEventListener('error', (e: Event) => {
    //   this.close()
    // })
    this.addEventListener('message', (e: MessageEvent<string>) => {
      const message = JSON.parse(e.data)
      if (['subscribe', 'unsubscribe'].includes(message.method)) {
        return
      }
      const stream = message.s as string
      const result = this._messageLiteToFull(message)
      const consumers = Object.values(this._pairs[stream])
      if (result && consumers?.length) {
        for (const consumer of consumers) {
          consumer(result)
        }
      }
    })
  }

  override readonly onopen = () => {}
  override readonly onmessage = () => {}
  override readonly onerror = () => {}
  override readonly onclose = () => {}

  onClose (callback: (e: CloseEvent) => void) {
    this.addEventListener('close', callback)
    return this
  }

  onError (callback: (e: Event) => void) {
    this.addEventListener('error', callback)
    return this
  }

  private async _subscribe (pair: string, subscribeParams: TSubscribeParams) {
    if (this._pairs[pair]) {
      return
    }
    await this.connected()
    let _resolve: (value: void | PromiseLike<void>) => void
    const onPaired = (e: MessageEvent<string>) => {
      const params = JSON.parse(e.data)?.results as TSubscribeParams
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
      this.addEventListener('message', onPaired)
    })
    this._sendSubscribe(subscribeParams)
    return Utils.timeout(promise, 30000, new Error('Connect Timeout')).finally(() => {
      this.removeEventListener('message', onPaired)
    })
  }

  /**
   * Only supports one pair for now
   */
  subscribe (options: {
    stream: TStreamEndpoint
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
