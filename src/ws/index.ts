import { type ECurrency, type EInstrumentSettlementPeriod, type IMiniTicker, type IOrderbookLevels, type IPublicTrade, type ITicker, type IWSMiniTickerResponse, type IWSOrderbookLevelsResponse, type IWSRecentTradeResponse, type IWSTickerResponse } from '../interfaces'
import { Utils, WS_MINI_TICKER_RESPONSE_MAP, WS_ORDERBOOK_LEVELS_RESPONSE_MAP, WS_RECENT_TRADE_RESPONSE_MAP, WS_TICKER_RESPONSE_MAP } from '../utils'
import { StreamEndpoints, type EStreamEndpoints, type EWsStreamParam } from './interfaces'
export * from './interfaces'

type TStreamEndpoint = EStreamEndpoints | typeof StreamEndpoints[number]
interface IParsedParams extends Omit<EWsStreamParam, 'kind' | 'underlying' | 'quote' | 'rate'> {
  kind: EInstrumentSettlementPeriod[]
  underlying: ECurrency[]
  quote: ECurrency[]
  rate: number
}
type TMessageHandler = (data: IMiniTicker | ITicker | IOrderbookLevels | IPublicTrade) => void

export class WS extends WebSocket {
  private _connected = false

  private parseStream (stream: TStreamEndpoint) {
    if (StreamEndpoints.includes(stream)) {
      return stream
    }

    throw new Error('MDGStream: unknown stream')
  }

  private parseParams (params: EWsStreamParam): IParsedParams {
    return {
      ...params,
      kind: [params.kind],
      underlying: [params.underlying],
      quote: [params.quote],
      rate: Math.min(
        Math.max(
          params.rate ? params.rate : 1000,
          200
        ),
        5000
      )
    }

    // return params.map((param) => ({
    //   ...param,
    //   rate: Math.min(
    //     Math.max(
    //       param.rate ? param.rate : 1000,
    //       200
    //     ),
    //     5000
    //   )
    // }))
  }

  private getParamsKeyPairs (params: Array<{
    stream: string
    stream_params: IParsedParams
  }>) {
    return params.reduce<string[]>((merged, { stream, stream_params: streamParams }) => {
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

  private readonly _pairs: Record<string, TMessageHandler[]> = {}
  private bindListeners (pairs: string[], onMessage?: TMessageHandler) {
    if (!onMessage) {
      return
    }
    for (const pair of pairs) {
      if (!this._pairs[pair]) {
        this._pairs[pair] = []
      }
      if (!this._pairs[pair].includes(onMessage)) {
        this._pairs[pair].push(onMessage)
      }
    }
  }

  private messageLiteToFull (message: {
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
      if (this._pairs[stream]?.length) {
        const result = this.messageLiteToFull(message)
        if (result) {
          for (const callback of this._pairs[stream]) {
            callback(result)
          }
        }
      }
    })
  }

  onClose (callback: (e: CloseEvent) => void) {
    this.addEventListener('close', callback)
    return this
  }

  onError (callback: (e: Event) => void) {
    this.addEventListener('error', callback)
    return this
  }

  override readonly onopen = () => {}
  override readonly onmessage = () => {}
  override readonly onerror = () => {}
  override readonly onclose = () => {}

  /**
   * Only supports one pair for now
   */
  subscribe (options: {
    stream: TStreamEndpoint
    params: EWsStreamParam
  }, onMessage?: TMessageHandler) {
    const message = {
      id: 1,
      jsonrpc: '2.0',
      method: 'subscribe',
      params: [{
        stream: this.parseStream(options.stream).replace(/^full\./, 'lite.'),
        stream_params: this.parseParams(options.params)
      }]
    }
    const pairs = this.getParamsKeyPairs(message.params)
    const pair = pairs[0] // only allow one pair for now
    if (this._pairs[pair]) {
      this.bindListeners(pairs, onMessage)
      return
    }
    let _resolve: (value: void | PromiseLike<void>) => void
    const onConnected = (e: MessageEvent<string>) => {
      const params = JSON.parse(e.data)?.results as Parameters<typeof this.getParamsKeyPairs>[0]
      if (!params) {
        return
      }
      const [responsePair] = this.getParamsKeyPairs(params)
      if (responsePair === pair) {
        this.bindListeners(pairs, onMessage)
        _resolve()
      }
    }
    const promise = new Promise<void>((resolve) => {
      _resolve = resolve
      this.addEventListener('message', onConnected)
    })
    this.send(JSON.stringify(message))
    return Utils.timeout(promise, 30000, new Error('Connect Timeout')).finally(() => {
      this.removeEventListener('message', onConnected)
    })
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
