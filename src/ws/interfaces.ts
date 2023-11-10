import { type ECurrency, type EInstrumentKind } from '../interfaces'

export enum EWsMethod {
  SUBSCRIBE = 'subscribe',
}

// export enum EWsStream {
//   MINI_TICKER_SNAP_LITE = 'lite.v1.mini.snap',
//   MINI_TICKER_SNAP_FULL = 'full.v1.mini.snap',
//   MINI_TICKER_DELTA_LITE = 'lite.v1.mini.delta',
//   MINI_TICKER_DELTA_FULL = 'full.v1.mini.delta',

//   TICKER_SNAP_LITE = 'lite.v1.ticker.snap',
//   TICKER_SNAP_FULL = 'full.v1.ticker.snap',
//   TICKER_DELTA_LITE = 'lite.v1.ticker.delta',
//   TICKER_DELTA_FULL = 'full.v1.ticker.delta',

//   ORDER_BOOK_SNAP_LITE = 'lite.v1.orderbook.snap',
//   ORDER_BOOK_SNAP_FULL = 'full.v1.orderbook.snap',
//   ORDER_BOOK_DELTA_LITE = 'lite.v1.orderbook.delta',
//   ORDER_BOOK_DELTA_FULL = 'full.v1.orderbook.delta',

//   TRADES_LITE = 'lite.v1.trades',
//   TRADES_FULL = 'full.v1.trades',
// }

export enum EWsStream {
  MINI_TICKER_SNAP = 'MINI_TICKER_SNAP',
  MINI_TICKER_DELTA = 'MINI_TICKER_DELTA',

  TICKER_SNAP = 'TICKER_SNAP',
  TICKER_DELTA = 'TICKER_DELTA',

  ORDER_BOOK_SNAP = 'ORDER_BOOK_SNAP',
  ORDER_BOOK_DELTA = 'ORDER_BOOK_DELTA',

  TRADES = 'TRADES',
}

export interface EWsStreamParam {
  kind: EInstrumentKind[]
  underlying: ECurrency[]
  quote: ECurrency[]
  rate?: number
  depth?: number
  greeks?: boolean
  aggregate?: number
}
