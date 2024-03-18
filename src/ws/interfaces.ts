import {
  type ECurrency,
  type EKind,
  type EVenue,
  type IWSCandlestickRequest,
  type IWSMiniTickerRequest,
  type IWSOrderbookLevelsRequest,
  type IWSPositionsRequest,
  type IWSPrivateTradeRequest,
  type IWSPublicTradesRequest,
  type IWSRfqQuoteRequest,
  type IWSRfqRequest,
  type IWSTickerRequest,
  type IWsOrderRequest,
  type IWsOrderStateRequest
} from '../interfaces'

export enum EWsMethod {
  SUBSCRIBE = 'subscribe',
}

export enum EStreamEndpoints {
  // MDG
  LITE_MINI_SNAP_V1 = 'lite.v1.mini.snap',
  FULL_MINI_SNAP_V1 = 'full.v1.mini.snap',
  LITE_MINI_DELTA_V1 = 'lite.v1.mini.delta',
  FULL_MINI_DELTA_V1 = 'full.v1.mini.delta',
  LITE_TICKER_SNAP_V1 = 'lite.v1.ticker.snap',
  FULL_TICKER_SNAP_V1 = 'full.v1.ticker.snap',
  LITE_TICKER_DELTA_V1 = 'lite.v1.ticker.delta',
  FULL_TICKER_DELTA_V1 = 'full.v1.ticker.delta',
  LITE_ORDERBOOK_SNAP_V1 = 'lite.v1.orderbook.snap',
  FULL_ORDERBOOK_SNAP_V1 = 'full.v1.orderbook.snap',
  LITE_ORDERBOOK_DELTA_V1 = 'lite.v1.orderbook.delta',
  FULL_ORDERBOOK_DELTA_V1 = 'full.v1.orderbook.delta',
  LITE_TRADES_V1 = 'lite.v1.trades',
  FULL_TRADES_V1 = 'full.v1.trades',
  LITE_KLINE_TRADE_V1 = 'lite.v1.kline.trade',
  FULL_KLINE_TRADE_V1 = 'full.v1.kline.trade',

  // TDG
  LITE_ORDER_V1 = 'lite.v1.order',
  FULL_ORDER_V1 = 'full.v1.order',
  // FULL_ORDER_STATE_V1 = 'full.v1.order.state', // TODO: not implement
  // LITE_ORDER_STATE_V1 = 'lite.v1.order.state', // TODO: not implement
  LITE_RFQ_QUOTE_V1 = 'lite.v1.rfq_quote',
  FULL_RFQ_QUOTE_V1 = 'full.v1.rfq_quote',
  LITE_RFQ_V1 = 'lite.v1.rfq',
  FULL_RFQ_V1 = 'full.v1.rfq',
  // FULL_SUB_ACCOUNT_V1 = 'full.v1.sub_account', // TODO: not implement
  // LITE_SUB_ACCOUNT_V1 = 'lite.v1.sub_account', // TODO: not implement
  // FULL_TRADE_V1 = 'full.v1.trade', // TODO: not implement
  // LITE_TRADE_V1 = 'lite.v1.trade', // TODO: not implement
  // FULL_TRANSACTION_V1 = 'full.v1.transaction', // TODO: not implement
  // LITE_TRANSACTION_V1 = 'lite.v1.transaction', // TODO: not implement
}

type IWSRequest = IWSMiniTickerRequest & IWSOrderbookLevelsRequest & IWSPositionsRequest & IWSPrivateTradeRequest & IWSPublicTradesRequest & IWSRfqQuoteRequest & IWSRfqRequest & IWSTickerRequest & IWsOrderRequest & IWsOrderStateRequest & IWSCandlestickRequest
export interface EWsStreamParam extends Omit<IWSRequest, 'kind' | 'underlying' | 'quote' | 'venue' | 'expiration' | 'strike_price'> {
  kind?: `${EKind}`
  underlying?: `${ECurrency}`
  quote?: `${ECurrency}`
  venue?: Array<`${EVenue}`>
  expiration?: bigint
  strike_price?: bigint
}
