import { type ECurrency, type EInstrumentSettlementPeriod } from '../interfaces'

export enum EWsMethod {
  SUBSCRIBE = 'subscribe',
}

// export enum EStreamEndpoints {
//   // MDG
//   MINI_SNAP_V1 = 'lite.v1.mini.snap',
//   MINI_DELTA_V1 = 'lite.v1.mini.delta',
//   TICKER_SNAP_V1 = 'lite.v1.ticker.snap',
//   TICKER_DELTA_V1 = 'lite.v1.ticker.delta',
//   ORDERBOOK_SNAP_V1 = 'lite.v1.orderbook.snap',
//   ORDERBOOK_DELTA_V1 = 'lite.v1.orderbook.delta',
//   TRADES_V1 = 'lite.v1.trades',

//   // TDG
//   ORDER_V1 = 'lite.v1.order',
//   RFQ_V1 = 'lite.v1.rfq',
//   RFQ_QUOTE_V1 = 'lite.v1.rfq_quote',
// }

export enum EStreamEndpoints {
  // MDG
  MINI_SNAP_V1 = 'lite.v1.mini.snap',
  FULL_MINI_SNAP_V1 = 'full.v1.mini.snap',
  MINI_DELTA_V1 = 'lite.v1.mini.delta',
  FULL_MINI_DELTA_V1 = 'full.v1.mini.delta',
  TICKER_SNAP_V1 = 'lite.v1.ticker.snap',
  FULL_TICKER_SNAP_V1 = 'full.v1.ticker.snap',
  TICKER_DELTA_V1 = 'lite.v1.ticker.delta',
  FULL_TICKER_DELTA_V1 = 'full.v1.ticker.delta',
  ORDERBOOK_SNAP_V1 = 'lite.v1.orderbook.snap',
  FULL_ORDERBOOK_SNAP_V1 = 'full.v1.orderbook.snap',
  ORDERBOOK_DELTA_V1 = 'lite.v1.orderbook.delta',
  FULL_ORDERBOOK_DELTA_V1 = 'full.v1.orderbook.delta',
  TRADES_V1 = 'lite.v1.trades',
  FULL_TRADES_V1 = 'full.v1.trades',

  // TDG
  ORDER_V1 = 'lite.v1.order',
  FULL_ORDER_V1 = 'full.v1.order',
  RFQ_V1 = 'lite.v1.rfq',
  FULL_RFQ_V1 = 'full.v1.rfq',
  RFQ_QUOTE_V1 = 'lite.v1.rfq_quote',
  FULL_RFQ_QUOTE_V1 = 'full.v1.rfq_quote'
}

export interface EWsStreamParam {
  kind: EInstrumentSettlementPeriod
  underlying: `${ECurrency}`
  quote: `${ECurrency}`
  rate?: number
  depth?: number
  greeks?: boolean
  aggregate?: number
}
