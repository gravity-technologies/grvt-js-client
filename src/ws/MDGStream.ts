import { EWsStream, type EWsStreamParam } from './interfaces'
import { WS } from './ws'

export class MDGStream extends WS {
  private parseParams (params: EWsStreamParam[]) {
    return params.map((param) => ({
      ...param,
      rate: Math.max(
        Math.min(
          param.rate ? param.rate : 1000,
          200
        ),
        5000
      )
    }))
  }

  private getStreamName (stream: EWsStream) {
    switch (stream) {
      case EWsStream.MINI_TICKER_SNAP:
        return 'lite.v1.mini.snap'
      case EWsStream.MINI_TICKER_DELTA:
        return 'lite.v1.mini.delta'
      case EWsStream.TICKER_SNAP:
        return 'lite.v1.ticker.snap'
      case EWsStream.TICKER_DELTA:
        return 'lite.v1.ticker.delta'
      case EWsStream.ORDER_BOOK_SNAP:
        return 'lite.v1.orderbook.snap'
      case EWsStream.ORDER_BOOK_DELTA:
        return 'lite.v1.orderbook.delta'
      case EWsStream.TRADES:
        return 'lite.v1.trades'
      default:
        throw new Error('MDGStream: unknown stream')
    }
  }

  subscribe = (
    stream: EWsStream,
    params: EWsStreamParam[]
  ) => {
    this.parseParams(params)
  }
}
