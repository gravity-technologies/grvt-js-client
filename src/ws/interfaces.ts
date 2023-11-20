import { type ECurrency, type EInstrumentSettlementPeriod } from '../interfaces'

export enum EWsMethod {
  SUBSCRIBE = 'subscribe',
}

export enum EStreamEndpoints {
  MINI_SNAP_V1 = 'lite.v1.mini.snap',
  MINI_DELTA_V1 = 'lite.v1.mini.delta',
  TICKER_SNAP_V1 = 'lite.v1.ticker.snap',
  TICKER_DELTA_V1 = 'lite.v1.ticker.delta',
  ORDERBOOK_SNAP_V1 = 'lite.v1.orderbook.snap',
  ORDERBOOK_DELTA_V1 = 'lite.v1.orderbook.delta',
  TRADES_V1 = 'lite.v1.trades',
}

export const StreamEndpoints = Object.freeze([
  'lite.v1.mini.snap',
  'full.v1.mini.snap',
  'lite.v1.mini.delta',
  'full.v1.mini.delta',
  'lite.v1.ticker.snap',
  'full.v1.ticker.snap',
  'lite.v1.ticker.delta',
  'full.v1.ticker.delta',
  'lite.v1.orderbook.snap',
  'full.v1.orderbook.snap',
  'lite.v1.orderbook.delta',
  'full.v1.orderbook.delta',
  'lite.v1.trades',
  'full.v1.trades'
])

export interface EWsStreamParam {
  kind: EInstrumentSettlementPeriod
  underlying: `${ECurrency}`
  quote: `${ECurrency}`
  rate?: number
  depth?: number
  greeks?: boolean
  aggregate?: number
}
