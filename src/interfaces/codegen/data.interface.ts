export enum ECandlestickInterval {
  // 1 minute
  CI_1_M = 'CI_1_M',
  // 3 minutes
  CI_3_M = 'CI_3_M',
  // 5 minutes
  CI_5_M = 'CI_5_M',
  // 15 minutes
  CI_15_M = 'CI_15_M',
  // 30 minutes
  CI_30_M = 'CI_30_M',
  // 1 hour
  CI_1_H = 'CI_1_H',
  // 2 hour
  CI_2_H = 'CI_2_H',
  // 4 hour
  CI_4_H = 'CI_4_H',
  // 6 hour
  CI_6_H = 'CI_6_H',
  // 8 hour
  CI_8_H = 'CI_8_H',
  // 12 hour
  CI_12_H = 'CI_12_H',
  // 1 day
  CI_1_D = 'CI_1_D',
  // 3 days
  CI_3_D = 'CI_3_D',
  // 5 days
  CI_5_D = 'CI_5_D',
  // 1 week
  CI_1_W = 'CI_1_W',
  // 2 weeks
  CI_2_W = 'CI_2_W',
  // 3 weeks
  CI_3_W = 'CI_3_W',
  // 4 weeks
  CI_4_W = 'CI_4_W',
}

export enum ECandlestickType {
  // Tracks traded prices
  TRADE = 'TRADE',
  // Tracks mark prices
  MARK = 'MARK',
  // Tracks index prices
  INDEX = 'INDEX',
  // Tracks book mid prices
  MID = 'MID',
}

// The list of Currencies that are supported on the GRVT exchange
export enum ECurrency {
  // the USDC token
  USDC = 'USDC',
  // the USDT token
  USDT = 'USDT',
  // the ETH token
  ETH = 'ETH',
  // the BTC token
  BTC = 'BTC',
}

export enum EInstrumentSettlementPeriod {
  // Instrument settles through perpetual hourly funding cycles
  PERPETUAL = 'PERPETUAL',
  // Instrument settles at an expiry date, marked as a daily instrument
  DAILY = 'DAILY',
  // Instrument settles at an expiry date, marked as a weekly instrument
  WEEKLY = 'WEEKLY',
  // Instrument settles at an expiry date, marked as a monthly instrument
  MONTHLY = 'MONTHLY',
  // Instrument settles at an expiry date, marked as a quarterly instrument
  QUARTERLY = 'QUARTERLY',
}

// The list of asset kinds that are supported on the GRVT exchange
export enum EKind {
  // the perpetual asset kind
  PERPETUAL = 'PERPETUAL',
  // the future asset kind
  FUTURE = 'FUTURE',
  // the call option asset kind
  CALL = 'CALL',
  // the put option asset kind
  PUT = 'PUT',
}

export enum EMarginType {
  // Simple Cross Margin Mode: all assets have a predictable margin impact, the whole subaccount shares a single margin
  SIMPLE_CROSS_MARGIN = 'SIMPLE_CROSS_MARGIN',
  // Portfolio Cross Margin Mode: asset margin impact is analysed on portfolio level, the whole subaccount shares a single margin
  PORTFOLIO_CROSS_MARGIN = 'PORTFOLIO_CROSS_MARGIN',
}

export enum EOrderRejectReason {
  // client called a Cancel API
  CLIENT_CANCEL = 'CLIENT_CANCEL',
  // client called a Bulk Cancel API
  CLIENT_BULK_CANCEL = 'CLIENT_BULK_CANCEL',
  // client called a Session Cancel API, or set the WebSocket connection to 'cancelOrdersOnTerminate'
  CLIENT_SESSION_END = 'CLIENT_SESSION_END',
  // instrument is no longer tradable on Gravity. (typically due to a market halt, or instrument expiry)
  INSTRUMENT_DEACTIVATED = 'INSTRUMENT_DEACTIVATED',
  // market maker protection triggered
  MM_PROTECTION = 'MM_PROTECTION',
  // the order has expired
  EXPIRED = 'EXPIRED',
  // the order will bring the sub account below initial margin requirement
  BELOW_MARGIN = 'BELOW_MARGIN',
  // the sub account is liquidated (and all open orders are cancelled by Gravity)
  LIQUIDATION = 'LIQUIDATION',
  // system failover resulting in loss of order state
  SYSTEM_FAILOVER = 'SYSTEM_FAILOVER',
  // a previous order shares the same signature hash as your current order (typically when you submit the same signature twice)
  CONFLICTING_SIGNATURE_HASH = 'CONFLICTING_SIGNATURE_HASH',
  // an active order on your sub account shares the same clientOrderId
  OVERLAPPING_CLIENT_ORDER_ID = 'OVERLAPPING_CLIENT_ORDER_ID',
  // the RFQ has been cancelled
  RFQ_CANCELLED = 'RFQ_CANCELLED',
  // the AXE has been cancelled
  AXE_CANCELLED = 'AXE_CANCELLED',
  // the order payload contains one or more validation error (Trading Server will reply with a more specific error)
  INVALID_ORDER = 'INVALID_ORDER',
  // the credentials used (userSession/apiKeySession/walletSignature) is not authorised to perform the action
  UNAUTHORISED = 'UNAUTHORISED',
  // when post-only order enters orderbook as a taker order
  FAIL_POST_ONLY = 'FAIL_POST_ONLY',
  // when reduce-only order causes position size to increase
  FAIL_REDUCE_ONLY = 'FAIL_REDUCE_ONLY',
  // trigger price is on the wrong side of the trigger condition
  INVALID_TRIGGER_PRICE = 'INVALID_TRIGGER_PRICE',
  // the RFQ has expired
  RFQ_EXPIRED = 'RFQ_EXPIRED',
  // the AXE has expired
  AXE_EXPIRED = 'AXE_EXPIRED',
  // the FOK order could not be fully matched
  FAIL_FOK = 'FAIL_FOK',
  // the AON order could not be fully matched
  FAIL_AON = 'FAIL_AON',
  // the order matched with another order from the same sub account
  SELF_MATCHED_SUBACCOUNT = 'SELF_MATCHED_SUBACCOUNT',
  // the signature size exceeds the maximum allowed size
  SIGNATURE_SIZE_EXCEEDED = 'SIGNATURE_SIZE_EXCEEDED',
}

export enum EOrderStateFilter {
  // create only filter
  C = 'C',
  // update only filter
  U = 'U',
  // create and update filter
  A = 'A',
}

export enum EOrderStatus {
  // Order is waiting for Trigger Condition to be hit
  PENDING = 'PENDING',
  // Order is actively matching on the orderbook, could be unfilled or partially filled
  OPEN = 'OPEN',
  // Order is fully filled and hence closed
  FILLED = 'FILLED',
  // Order is rejected by GRVT Backend since if fails a particular check (See OrderRejectReason)
  REJECTED = 'REJECTED',
  // Order is cancelled by the user using one of the supported APIs (See OrderRejectReason)
  CANCELLED = 'CANCELLED',
}

export enum ERfqRejectReason {
  // client called a Cancel API
  CLIENT_CANCEL = 'CLIENT_CANCEL',
  // client called a Bulk Cancel API
  CLIENT_BULK_CANCEL = 'CLIENT_BULK_CANCEL',
  // client called a Session Cancel API, or set the WebSocket connection to 'cancelRfqsOnTerminate'
  CLIENT_SESSION_END = 'CLIENT_SESSION_END',
  // instrument is no longer tradable on Gravity. (typically due to a market halt, or instrument expiry)
  INSTRUMENT_DEACTIVATED = 'INSTRUMENT_DEACTIVATED',
  // market maker protection triggered
  MM_PROTECTION = 'MM_PROTECTION',
  // the RFQ has expired
  EXPIRED = 'EXPIRED',
  // the RFQ will bring the sub account below initial margin requirement
  BELOW_MARGIN = 'BELOW_MARGIN',
  // the sub account is liquidated (and all open RFQs are cancelled by Gravity)
  LIQUIDATION = 'LIQUIDATION',
  // system failover resulting in loss of RFQ state
  SYSTEM_FAILOVER = 'SYSTEM_FAILOVER',
  // the RFQ payload contains one or more validation error (Trading Server will reply with a more specific error)
  INVALID_RFQ = 'INVALID_RFQ',
  // the credentials used (userSession/apiKeySession/walletSignature) is not authorised to perform the action
  UNAUTHORISED = 'UNAUTHORISED',
}

export enum ERfqStatus {
  // RFQ is actively matching, could be unfilled, partially filled, or over filled (GRVT allows over filling)
  OPEN = 'OPEN',
  // RFQ is rejected by GRVT Backend since if fails a particular check (See OrderRejectReason)
  REJECTED = 'REJECTED',
  // RFQ is cancelled by the user using one of the supported APIs (See OrderRejectReason)
  CANCELLED = 'CANCELLED',
}

export enum EStrategy {
  // Fut, [Long Future] (/)
  FUTURE = 'FUTURE',
  // Perp, [Long Perpetual] (/)
  PERPETUAL = 'PERPETUAL',
  // Call, [Long Call] (_/)
  CALL = 'CALL',
  // Put, [Long Put] (\_)
  PUT = 'PUT',
  // CSpd, [Long Call , Short Call] (_/ ̅)
  CALL_SPREAD = 'CALL_SPREAD',
  // PSpd, [Short Put , Long Put] ( ̅\_)
  PUT_SPREAD = 'PUT_SPREAD',
  // FSpd, [Long Future . Short Future] (/.\)
  FUTURE_SPREAD = 'FUTURE_SPREAD',
  // RRc, [Short Put , Long Call] (/-/)
  RISK_REVERSAL_CALL = 'RISK_REVERSAL_CALL',
  // RRp, [Long Put , Sell Call] (\-\)
  RISK_REVERSAL_PUT = 'RISK_REVERSAL_PUT',
  // CCal, [Long Call . Short Call] (_/.\_)
  CALL_CALENDAR_SPREAD = 'CALL_CALENDAR_SPREAD',
  // PCal, [Short Put . Long Put] (_/.\_)
  PUT_CALENDAR_SPREAD = 'PUT_CALENDAR_SPREAD',
  // Strd, [Long Call + Long Put] (\/)
  STRADDLE = 'STRADDLE',
  // Strg, [Long Put , Long Call]  (\_/)
  STRANGLE = 'STRANGLE',
  // CFly, [Long Call , 2 Short Call , Long Call] (_/\_)
  CALL_BUTTERFLY = 'CALL_BUTTERFLY',
  // PFly, [Long Put , 2 Short Put , Long Put] (_/\_)
  PUT_BUTTERFLY = 'PUT_BUTTERFLY',
  // IFly, [Long Call , Short Call + Short Put , Long Put] (_/\_)
  IRON_BUTTERFLY = 'IRON_BUTTERFLY',
  // CCon, [Long Call , Short Call, Short Call , Long Call] (_/ ̅\_)
  CALL_CONDOR = 'CALL_CONDOR',
  // PCon, [Long Put , Short Put, Short Put , Long Put] (_/ ̅\_)
  PUT_CONDOR = 'PUT_CONDOR',
  // ICon, [Long Put , Short Put, Short Call , Long Call] (_/ ̅\_)
  IRON_CONDOR = 'IRON_CONDOR',
  // Cstm - Everything Else
  CUSTOM = 'CUSTOM',
}

// |                       | Must Fill All | Can Fill Partial |
// | -                     | -             | -                |
// | Must Fill Immediately | FOK           | IOC              |
// | Can Fill Till Time    | AON           | GTC              |
//
export enum ETimeInForce {
  // GTT - Remains open until it is cancelled, or expired
  GOOD_TILL_TIME = 'GOOD_TILL_TIME',
  // AON - Either fill the whole order or none of it (Block Trades Only)
  ALL_OR_NONE = 'ALL_OR_NONE',
  // IOC - Fill the order as much as possible, when hitting the orderbook. Then cancel it
  IMMEDIATE_OR_CANCEL = 'IMMEDIATE_OR_CANCEL',
  // FOK - Both AoN and IoC. Either fill the full order when hitting the orderbook, or cancel it
  FILL_OR_KILL = 'FILL_OR_KILL',
}

// The list of Trading Venues that are supported on the GRVT exchange
export enum EVenue {
  // the trade is cleared on the orderbook venue
  ORDERBOOK = 'ORDERBOOK',
  // the trade is cleared on the RFQ venue
  RFQ = 'RFQ',
  // the trade is cleared on the AXE venue
  AXE = 'AXE',
}

export interface IAPIMiniTickerRequest {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
}

export interface IAPIOrderbookLevelsRequest {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // Depth of the order book to be retrieved (API/Snapshot max is 100, Delta max is 1000)
  depth?: number
  // The number of levels to aggregate into one level (1 = no aggregation, 10/100/1000 = aggregate 10/100/1000 levels into 1)
  aggregate?: number
}

export interface IAPISettlementPrice {
  // The underlying currency of the settlement price
  underlying?: ECurrency
  // The quote currency of the settlement price
  quote?: ECurrency
  // The settlement timestamp of the settlement price, expressed in unix nanoseconds
  settlement_time?: bigint
  // The settlement price, expressed in quote asset decimal units
  settlement_price?: bigint
}

export interface IApiCancelAllOrdersRequest {
  // The subaccount ID cancelling all orders
  sub_account_id?: bigint
}

export interface IApiCancelAllOrdersResponse {
  // The number of orders cancelled
  num_cancelled?: number
}

export interface IApiCancelAllRfqQuotesRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
}

export interface IApiCancelAllRfqQuotesResponse {
  // The number of RFQ Quotes cancelled
  num_cancelled?: number
}

export interface IApiCancelAllRfqsRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
}

export interface IApiCancelAllRfqsResponse {
  // The number of RFQs cancelled
  num_cancelled?: number
}

export interface IApiCancelOrderRequest {
  // The subaccount ID cancelling the order
  sub_account_id?: bigint
  // Cancel the order with this `order_id`
  order_id?: bigint
  // Cancel the order with this `client_order_id`
  client_order_id?: number
}

export interface IApiCancelOrderResponse {
  // The cancelled order
  order?: IOrder
}

export interface IApiCancelRfqQuoteRequest {
  // The subaccount ID cancelling the quote
  sub_account_id?: bigint
  // Cancel the quote with this `order_id`
  quote_id?: bigint
  // Cancel the quote with this `client_order_id`
  client_quote_id?: number
}

export interface IApiCancelRfqQuoteResponse {
  // The cancelled RFQ Quote
  rfq_quote?: IRfqQuote
}

export interface IApiCancelRfqRequest {
  // The subaccount ID cancelling the RFQ
  sub_account_id?: bigint
  // Cancel the RFQ with this `rfq_id`
  rfq_id?: bigint
}

export interface IApiCancelRfqResponse {
  // The cancelled RFQ
  rfq?: IRfq
}

// startTime and endTime are optional parameters. The semantics of these parameters are as follows:<ul><li>If both `startTime` and `endTime` are not set, the most recent candlesticks are returned up to `limit`.</li><li>If `startTime` is set and `endTime` is not set, the candlesticks starting from `startTime` are returned up to `limit`.</li><li>If `startTime` is not set and `endTime` is set, the candlesticks ending at `endTime` are returned up to `limit`.</li><li>If both `startTime` and `endTime` are set, the candlesticks between `startTime` and `endTime` are returned up to `limit`.</li></ul>
export interface IApiCandlestickRequest {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The interval of each candlestick
  interval?: ECandlestickInterval
  // The type of candlestick data to retrieve
  type?: ECandlestickType
  // Start time of kline data in unix nanoseconds
  start_time?: bigint
  // End time of kline data in unix nanoseconds
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1500
  limit?: number
}

export interface IApiCandlestickResponse {
  // The candlestick result set for given interval
  results?: ICandlestick[]
}

export interface IApiCreateOrderRequest {
  // The order to create
  order?: IOrder
}

export interface IApiCreateOrderResponse {
  // The created order
  order?: IOrder
}

export interface IApiCreateRfqQuoteRequest {
  // The RFQ Quote to create
  rfq_quote?: IRfqQuote
}

export interface IApiCreateRfqQuoteResponse {
  // The created RFQ Quote
  rfq_quote?: IRfqQuote
}

export interface IApiCreateRfqRequest {
  // The RFQ to create
  rfq?: IRfq
}

export interface IApiCreateRfqResponse {
  // The created RFQ
  rfq?: IRfq
}

// The request to get the historical deposits of an account
// The history is returned in reverse chronological order
export interface IApiDepositHistoryRequest {
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: bigint
  // The token currency to query for, if nil or empty, return all deposits. Otherwise, only entries matching the filter will be returned
  token_currency?: ECurrency[]
  // The start time to query for in unix nanoseconds
  start_time?: bigint
  // The end time to query for in unix nanoseconds
  end_time?: bigint
}

export interface IApiDepositHistoryResponse {
  // The total number of deposits matching the request account
  total?: number
  // The cursor to indicate when to start the next query from
  next?: bigint
  // The deposit history matching the request account
  results?: IDepositHistory[]
}

// GRVT runs on a ZKSync Hyperchain which settles directly onto Ethereum.
// To Deposit funds from your L1 wallet into a GRVT SubAccount, you will be required to submit a deposit transaction directly to Ethereum.
// GRVT's bridge verifier will scan Ethereum from time to time. Once it receives proof that your deposit has been confirmed on Ethereum, it will initiate the deposit process.
//
// This current payload is used for alpha testing only.
export interface IApiDepositRequest {
  // The main account to deposit into
  to_account_id?: bigint
  // The token currency to deposit
  token_currency?: ECurrency
  // The number of tokens to deposit, quoted in token_currency decimals
  num_tokens?: bigint
}

// startTime and endTime are optional parameters. The semantics of these parameters are as follows:<ul><li>If both `startTime` and `endTime` are not set, the most recent funding rates are returned up to `limit`.</li><li>If `startTime` is set and `endTime` is not set, the funding rates starting from `startTime` are returned up to `limit`.</li><li>If `startTime` is not set and `endTime` is set, the funding rates ending at `endTime` are returned up to `limit`.</li><li>If both `startTime` and `endTime` are set, the funding rates between `startTime` and `endTime` are returned up to `limit`.</li></ul>
//
// The instrument is also optional. When left empty, all perpetual instruments are returned.
export interface IApiFundingRateRequest {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // Start time of funding rate in unix nanoseconds
  start_time?: bigint
  // End time of funding rate in unix nanoseconds
  end_time?: bigint
  // The limit to query for. Defaults to 90; Max 300
  limit?: number
}

export interface IApiFundingRateResponse {
  // The funding rate result set for given interval
  results?: IFundingRate[]
}

// Fetch a single instrument by supplying the asset or instrument name
export interface IApiGetInstrumentRequest {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The readable name of the instrument
  instrument_name?: string
}

export interface IApiGetInstrumentResponse {
  // The instrument matching the request asset
  results?: IInstrument
}

export interface IApiGetInstrumentsRequest {
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // Request for active instruments only
  is_active?: boolean
  // The limit to query for. Defaults to 500; Max 100000
  limit?: number
}

export interface IApiGetInstrumentsResponse {
  // The instruments matching the request filter
  results?: IInstrument[]
}

export interface IApiMiniTickerResponse {
  // The mini ticker matching the request asset
  results?: IMiniTicker
}

export interface IApiOpenOrdersRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
}

export interface IApiOpenOrdersResponse {
  // The Open Orders matching the request filter
  orders?: IOrder[]
}

export interface IApiOpenRfqQuotesRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
}

export interface IApiOpenRfqQuotesResponse {
  // The Open RfqQuotes matching the request filter
  rfq_quotes?: IRfqQuote[]
}

export interface IApiOpenRfqsRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
}

export interface IApiOpenRfqsResponse {
  // The Open RFQs matching the request filter
  rfqs?: IRfq[]
}

export interface IApiOrderHistoryRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // The expiration time to apply in nanoseconds. If nil, this defaults to all expirations. Otherwise, only entries matching the filter will be returned
  expiration?: bigint[]
  // The strike price to apply. If nil, this defaults to all strike prices. Otherwise, only entries matching the filter will be returned
  strike_price?: bigint[]
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiOrderHistoryResponse {
  // The total number of orders matching the request filter
  total?: number
  // The cursor to indicate when to start the next query from
  next?: string
  // The Open Orders matching the request filter
  orders?: IOrder[]
}

export interface IApiOrderbookLevelsResponse {
  // The orderbook levels objects matching the request asset
  results?: IOrderbookLevels
}

export interface IApiPositionsRequest {
  // The sub account ID to request for
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
}

export interface IApiPositionsResponse {
  // The positions matching the request filter
  results?: IPositions[]
}

export interface IApiPrivateTradeHistoryRequest {
  // The sub account ID to request for
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // The expiration time to apply in unix nanoseconds. If nil, this defaults to all expirations. Otherwise, only entries matching the filter will be returned
  expiration?: bigint
  // The strike price to apply. If nil, this defaults to all strike prices. Otherwise, only entries matching the filter will be returned
  strike_price?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiPrivateTradeHistoryResponse {
  // The total number of private trades matching the request filter
  total?: number
  // The cursor to indicate when to start the next query from
  next?: string
  // The private trades matching the request asset
  results?: IPrivateTrade[]
}

export interface IApiPublicTradeHistoryRequest {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiPublicTradeHistoryResponse {
  // The public trades matching the request asset
  results?: IPublicTrade[]
}

export interface IApiPublicTradesRequest {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
}

export interface IApiPublicTradesResponse {
  // The public trades matching the request asset
  results?: IPublicTrade[]
}

// startTime and endTime are optional parameters. The semantics of these parameters are as follows:<ul><li>If both `startTime` and `endTime` are not set, the most recent settlement prices are returned up to `limit`.</li><li>If `startTime` is set and `endTime` is not set, the settlement prices starting from `startTime` are returned up to `limit`.</li><li>If `startTime` is not set and `endTime` is set, the settlement prices ending at `endTime` are returned up to `limit`.</li><li>If both `startTime` and `endTime` are set, the settlement prices between `startTime` and `endTime` are returned up to `limit`.</li></ul>
//
// The instrument is also optional. When left empty, all perpetual instruments are returned.
export interface IApiSettlementPriceRequest {
  // The underlying currency to select
  underlying?: ECurrency
  // The quote currency to select
  quote?: ECurrency
  // Start time of kline data in unix nanoseconds
  start_time?: bigint
  // End time of kline data in unix nanoseconds
  end_time?: bigint
  // The expiration time to select in unix nanoseconds
  expiration?: bigint
  // The strike price to select
  strike_price?: bigint
  // The limit to query for. Defaults to 30; Max 100
  limit?: number
}

export interface IApiSettlementPriceResponse {
  // The funding rate result set for given interval
  results?: IAPISettlementPrice[]
}

// The request to get the history of a sub account
// SubAccount Summary values are snapshotted once every hour
// No snapshots are taken if the sub account has no activity in the hourly window
// The history is returned in reverse chronological order
// History is preserved only for the last 30 days
export interface IApiSubAccountHistoryRequest {
  // The sub account ID to request for
  sub_account_id?: bigint
  // Start time of sub account history in unix nanoseconds
  start_time?: bigint
  // End time of sub account history in unix nanoseconds
  end_time?: bigint
  // The cursor to indicate when to start the next query from
  cursor?: bigint
}

export interface IApiSubAccountHistoryResponse {
  // The total number of sub account snapshots matching the request filter
  total?: number
  // The cursor to indicate when to start the next query from
  next?: bigint
  // The sub account history matching the request sub account
  results?: ISubAccount[]
}

export interface IApiSubAccountSummaryRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
}

export interface IApiSubAccountSummaryResponse {
  // The sub account matching the request sub account
  results?: ISubAccount
}

export interface IApiTDGAckResponse {
  // Gravity has acknowledged that the request has been successfully received and it will process it in the backend
  acknowledgement?: boolean
}

export interface IApiTickerFeedDataV1 {
  // The mini ticker matching the request asset
  results?: ITicker
}

export interface IApiTickerRequest {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
}

export interface IApiTickerResponse {
  // The mini ticker matching the request asset
  results?: ITicker
}

export interface IApiTradeRfqRequest {
  // The rfq to trade against
  rfq_id?: bigint
  // The taker order to trade against the rfq quotes
  order?: IOrder
}

export interface IApiTradeRfqResponse {
  // The rfq to trade against
  rfq_id?: bigint
  // The taker order to trade against the rfq quotes
  order?: IOrder
}

// The request to get the historical transfers of an account
// The history is returned in reverse chronological order
export interface IApiTransferHistoryRequest {
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: bigint
  // The token currency to query for, if nil or empty, return all transfers. Otherwise, only entries matching the filter will be returned
  token_currency?: ECurrency[]
  // The start time to query for in unix nanoseconds
  start_time?: bigint
  // The end time to query for in unix nanoseconds
  end_time?: bigint
}

export interface IApiTransferHistoryResponse {
  // The total number of transfers matching the request account
  total?: number
  // The cursor to indicate when to start the next query from
  next?: bigint
  // The transfer history matching the request account
  results?: ITransferHistory[]
}

// This API allows you to transfer funds in multiple different ways<ul>
// <li>Between SubAccounts within your Main Account</li>
// <li>Between your MainAccount and your SubAccounts</li>
// <li>To other MainAccounts that you have previously allowlisted</li>
// </ul>
export interface IApiTransferRequest {
  // The main account to transfer from
  from_account_id?: bigint
  // The subaccount to transfer from (0 if transferring from main account)
  from_sub_account_id?: bigint
  // The main account to deposit into
  to_account_id?: bigint
  // The subaccount to transfer to (0 if transferring to main account)
  to_sub_account_id?: bigint
  // The token currency to transfer
  token_currency?: ECurrency
  // The number of tokens to transfer, quoted in tokenCurrency decimal units
  num_tokens?: bigint
  // The signature of the transfer
  signature?: ISignature
}

// The request to get the historical withdrawals of an account
// The history is returned in reverse chronological order
export interface IApiWithdrawalHistoryRequest {
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: bigint
  // The token currency to query for, if nil or empty, return all withdrawals. Otherwise, only entries matching the filter will be returned
  token_currency?: ECurrency[]
  // The start time to query for in unix nanoseconds
  start_time?: bigint
  // The end time to query for in unix nanoseconds
  end_time?: bigint
}

export interface IApiWithdrawalHistoryResponse {
  // The total number of withdrawals matching the request account
  total?: number
  // The cursor to indicate when to start the next query from
  next?: bigint
  // The withdrawals history matching the request account
  results?: IWithdrawalHistory[]
}

// Leverage this API to initialize a withdrawal from GRVT's Hyperchain onto Ethereum.
// Do take note that the bridging process does take time. The GRVT UI will help you keep track of bridging progress, and notify you once its complete.
//
// If not withdrawing the entirety of your balance, there is a minimum withdrawal amount. Currently that amount is 100 USDC.
// Withdrawal fees also apply to cover the cost of the Ethereum transaction.
// Note that your funds will always remain in self-custory throughout the withdrawal process. At no stage does GRVT gain control over your funds.
export interface IApiWithdrawalRequest {
  // The main account to withdraw from
  from_account_id?: bigint
  // The Ethereum wallet to withdraw into
  to_eth_address?: bigint
  // The token currency to withdraw
  token_currency?: ECurrency
  // The number of tokens to withdraw, quoted in tokenCurrency decimal units
  num_tokens?: bigint
  // The signature of the withdrawal
  signature?: ISignature
}

export interface ICandlestick {
  // Open time of kline bar in unix nanoseconds
  open_time?: bigint
  // Close time of kline bar in unix nanosecond
  close_time?: bigint
  // The open price, expressed in base currency resolution units
  open?: bigint
  // The close price, expressed in base currency resolution units
  close?: bigint
  // The high price, expressed in base currency resolution units
  high?: bigint
  // The low price, expressed in base currency resolution units
  low?: bigint
  // The underlying volume transacted, expressed in underlying asset decimal units
  volume_u?: bigint
  // The quote volume transacted, expressed in quote asset decimal units
  volume_q?: bigint
  // The number of trades transacted
  trades?: number
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
}

export interface IDepositHistory {
  // The transaction ID of the deposit
  tx_id?: bigint
  // The ethereum address where the deposit originates
  from_eth_address?: bigint
  // The account to deposit into
  to_account_id?: bigint
  // The token currency to deposit
  token_currency?: ECurrency
  // The number of tokens to deposit
  num_tokens?: bigint
  // The signature of the deposit (supplied on L1 by the user)
  signature?: ISignature
  // The timestamp of the deposit in unix nanoseconds
  event_time?: bigint
}

export interface IFundingRate {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The funding rate of the instrument, expressed in centibeeps
  funding_rate?: number
  // The funding timestamp of the funding rate, expressed in unix nanoseconds
  funding_time?: bigint
  // The mark price of the instrument at funding timestamp, expressed in quote asset decimal units
  mark_price?: bigint
}

export interface IInstrument {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The readable name of the instrument
  instrument_name?: string
  // Venues that this instrument can be traded at
  venues?: EVenue[]
  // The settlement period of the instrument
  settlement_period?: EInstrumentSettlementPeriod
  // The smallest denomination of the underlying asset supported by GRVT (+3 represents 0.001, -3 represents 1000, 0 represents 1)
  underlying_decimals?: number
  // The smallest denomination of the quote asset supported by GRVT (+3 represents 0.001, -3 represents 1000, 0 represents 1)
  quote_decimals?: number
  // The size of a single tick, expressed in quote asset decimal units
  tick_size?: bigint
  // The minimum contract size, expressed in underlying asset decimal units
  min_size?: bigint
  // The minimum block trade size, expressed in underlying asset decimal units
  min_block_trade_size?: bigint
  // Creation time in unix nanoseconds
  create_time?: bigint
}

export interface IMiniTicker {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The mark price of the instrument, expressed in quote asset decimal units
  mark_price?: bigint
  // The index price of the instrument, expressed in quote asset decimal units
  index_price?: bigint
  // The last traded price of the instrument (also close price), expressed in quote asset decimal units
  last_price?: bigint
  // The number of assets traded in the last trade, expressed in underlying asset decimal units
  last_size?: bigint
  // The mid price of the instrument, expressed in quote asset decimal units
  mid_price?: bigint
  // The best bid price of the instrument, expressed in quote asset decimal units
  best_bid_price?: bigint
  // The number of assets offered on the best bid price of the instrument, expressed in underlying asset decimal units
  best_bid_size?: bigint
  // The best ask price of the instrument, expressed in quote asset decimal units
  best_ask_price?: bigint
  // The number of assets offered on the best ask price of the instrument, expressed in underlying asset decimal units
  best_ask_size?: bigint
}

// Order is a typed payload used throughout the GRVT platform to express all orderbook, RFQ, and liquidation orders.
// GRVT orders are capable of expressing both single-legged, and multi-legged orders by default.
// This increases the learning curve slightly but reduces overall integration load, since the order payload is used across all GRVT trading venues.
// Given GRVT's trustless settlement model, the Order payload also carries the signature, required to trade the order on our ZKSync Hyperchain.
//
// All fields in the Order payload (except `id`, `metadata`, and `state`) are trustlessly enforced on our Hyperchain.
// This minimizes the amount of trust users have to offer to GRVT
export interface IOrder {
  // [Filled by GRVT Backend] A unique 128-bit identifier for the order, deterministically generated within the GRVT backend
  order_id?: bigint
  // The subaccount initiating the order
  sub_account_id?: bigint
  // If the order is a market order
  // Market Orders do not have a limit price, and are always executed according to the maker order price.
  // Market Orders must always be taker orders
  is_market?: boolean
  // Four supported types of orders: GTT, IOC, AON, FOK:<ul>
  // <li>PARTIAL EXECUTION = GTT / IOC - allows partial size execution on each leg</li>
  // <li>FULL EXECUTION = AON / FOK - only allows full size execution on all legs</li>
  // <li>TAKER ONLY = IOC / FOK - only allows taker orders</li>
  // <li>MAKER OR TAKER = GTT / AON - allows maker or taker orders</li>
  // </ul>Exchange only supports (GTT, IOC, FOK)
  // RFQ Maker only supports (GTT, AON), RFQ Taker only supports (FOK)
  time_in_force?: ETimeInForce
  // The taker fee percentage cap signed by the order.
  // This is the maximum taker fee percentage the order sender is willing to pay for the order.
  // Expressed in 1/100th of a basis point. Eg. 100 = 1bps, 10,000 = 1%
  //
  taker_fee_percentage_cap?: number
  // Same as TakerFeePercentageCap, but for the maker fee. Negative for maker rebates
  maker_fee_percentage_cap?: number
  // If True, Order must be a maker order. It has to fill the orderbook instead of match it.
  // If False, Order can be either a maker or taker order.
  //
  // |               | Must Fill All | Can Fill Partial |
  // | -             | -             | -                |
  // | Must Be Taker | FOK + False   | IOC + False      |
  // | Can Be Either | AON + False   | GTC + False      |
  // | Must Be Maker | AON + True    | GTC + True       |
  //
  post_only?: boolean
  // If True, Order must reduce the position size, or be cancelled
  reduce_only?: boolean
  // The legs present in this order
  // The legs must be sorted by Asset.Instrument/Underlying/Quote/Expiration/StrikePrice
  legs?: IOrderLeg[]
  // The signature approving this order
  signature?: ISignature
  // Order Metadata, ignored by the smart contract, and unsigned by the client
  metadata?: IOrderMetadata
  // [Filled by GRVT Backend] The current state of the order, ignored by the smart contract, and unsigned by the client
  state?: IOrderState
}

export interface IOrderLeg {
  // The instrument to trade in this leg
  instrument?: string
  // The total number of assets to trade in this leg, expressed in underlying asset decimal units.
  size?: bigint
  // The limit price of the order leg, expressed in quote asset decimal units.
  // This is the total amount of base currency to pay/receive for all legs.
  limit_price?: bigint
  // If a OCO order is specified, this must contain the other limit price
  // User must sign both limit prices. Depending on which trigger condition is activated, a different limit price is used
  // The smart contract will always validate both limit prices, by arranging them in ascending order
  oco_limit_price?: bigint
  // Specifies if the order leg is a buy or sell
  is_buying_asset?: boolean
}

// Metadata fields are used to support Backend only operations. These operations are not trustless by nature.
// Hence, fields in here are never signed, and is never transmitted to the smart contract.
export interface IOrderMetadata {
  // A unique identifier for the active order within a subaccount, specified by the client
  // This is used to identify the order in the client's system
  // This field can be used for order amendment/cancellation, but has no bearing on the smart contract layer
  // This field will not be propagated to the smart contract, and should not be signed by the client
  // This value must be unique for all active orders in a subaccount, or amendment/cancellation will not work as expected
  // Gravity UI will generate a random clientOrderID for each order in the range [0, 2^31 - 1]
  // To prevent any conflicts, client machines should generate a random clientOrderID in the range [2^31, 2^32 - 1]
  //
  // When GRVT Backend receives an order with an overlapping clientOrderID, we will reject the order with rejectReason set to overlappingClientOrderId
  client_order_id?: number
  // [Filled by GRVT Backend] Time at which the order was received by GRVT in unix nanoseconds
  create_time?: bigint
}

export interface IOrderState {
  // The status of the order
  status?: EOrderStatus
  // The reason for rejection or cancellation
  reject_reason?: EOrderRejectReason
  // The number of assets available for orderbook/RFQ matching. Sorted in same order as Order.Legs
  book_size?: bigint[]
  // The total number of assets traded. Sorted in same order as Order.Legs
  traded_size?: bigint[]
  // Time at which the order was updated by GRVT, expressed in unix nanoseconds
  update_time?: bigint
}

export interface IOrderbookLevel {
  // The price of the level, expressed in quote asset decimal units
  price?: bigint
  // The number of assets offered, expressed in underlying asset decimal units
  size?: bigint
  // The number of open orders at this level
  num_orders?: number
}

export interface IOrderbookLevels {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The list of best bids up till query depth
  bids?: IOrderbookLevel[]
  // The list of best asks up till query depth
  asks?: IOrderbookLevel[]
}

export interface IPositions {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The sub account ID that participated in the trade
  sub_account_id?: bigint
  // The instrument being represented
  instrument?: string
  // The balance of the position, expressed in underlying asset decimal units. Negative for short positions
  balance?: bigint
  // The value of the position, negative for short assets, expressed in quote asset decimal units
  value?: bigint
  // The entry price of the position, expressed in quote asset decimal units
  // Whenever increasing the balance of a position, the entry price is updated to the new average entry price
  // newEntryPrice = (oldEntryPrice * oldBalance + tradePrice * tradeBalance) / (oldBalance + tradeBalance)
  entry_price?: bigint
  // The exit price of the position, expressed in quote asset decimal units
  // Whenever decreasing the balance of a position, the exit price is updated to the new average exit price
  // newExitPrice = (oldExitPrice * oldExitBalance + tradePrice * tradeBalance) / (oldExitBalance + tradeBalance)
  exit_price?: bigint
  // The mark price of the position, expressed in quote asset decimal units
  mark_price?: bigint
  // The unrealized PnL of the position, expressed in quote asset decimal units
  // unrealizedPnl = (markPrice - entryPrice) * balance
  unrealized_pnl?: bigint
  // The realized PnL of the position, expressed in quote asset decimal units
  // realizedPnl = (exitPrice - entryPrice) * exitBalance
  realized_pnl?: bigint
  // The total PnL of the position, expressed in quote asset decimal units
  // totalPnl = realizedPnl + unrealizedPnl
  pnl?: bigint
  // The ROI of the position, expressed as a percentage
  // roi = (pnl / (entryPrice * balance)) * 100
  roi?: number
}

export interface IPrivateTrade {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The sub account ID that participated in the trade
  sub_account_id?: bigint
  // The instrument being represented
  instrument?: string
  // The side that the subaccount took on the trade
  is_buyer?: boolean
  // The role that the subaccount took on the trade
  is_taker?: boolean
  // The number of assets being traded, expressed in underlying asset decimal units
  size?: bigint
  // The traded price, expressed in quote asset decimal units
  price?: bigint
  // The mark price of the instrument at point of trade, expressed in quote asset decimal units
  mark_price?: bigint
  // The index price of the instrument at point of trade, expressed in quote asset decimal units
  index_price?: bigint
  // The interest rate of the underlying at point of trade, expressed in centibeeps (1/100th of a basis point)
  interest_rate?: number
  // [Options] The forward price of the option at point of trade, expressed in quote asset decimal units
  forward_price?: bigint
  // The realized PnL of the trade, expressed in quote asset decimal units (0 if increasing position size)
  realized_pnl?: bigint
  // The fees paid on the trade, expressed in quote asset decimal unit (negative if maker rebate applied)
  fee?: bigint
  // The fee rate paid on the trade
  fee_rate?: number
  // A trade identifier
  trade_id?: bigint
  // An order identifier
  order_id?: bigint
  // The venue where the trade occurred
  venue?: EVenue
}

// All private RFQs and Private AXEs will be filtered out from the responses
export interface IPublicTrade {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // If taker was the buyer on the trade
  is_taker_buyer?: boolean
  // The number of assets being traded, expressed in underlying asset decimal units
  size?: bigint
  // The traded price, expressed in quote asset decimal units
  price?: bigint
  // The mark price of the instrument at point of trade, expressed in quote asset decimal units
  mark_price?: bigint
  // The index price of the instrument at point of trade, expressed in quote asset decimal units
  index_price?: bigint
  // The interest rate of the underlying at point of trade, expressed in centibeeps (1/100th of a basis point)
  interest_rate?: number
  // [Options] The forward price of the option at point of trade, expressed in quote asset decimal units
  forward_price?: bigint
  // A trade identifier
  trade_id?: bigint
  // The venue where the trade occurred
  venue?: EVenue
}

export interface IRFQBook {
  // List of all full/AON quotes, sorted from best price to worst
  full?: IRFQBookQuote[]
  // List of all levels of partial quotes, sorted from best price to worst
  partial?: IRFQBookLevel[]
}

export interface IRFQBookLevel {
  // The timestamp after which the price quoted in this level expires, expressed in unix nanoseconds
  // This is the earliest expiration of all partial quotes grouped into this level
  level_expiration?: bigint
  // price of the level, expressed in quote asset decimal units
  level_price?: bigint
  // The size of the level. The number of full structures in this level, expressed in base ratio units
  lots?: number
  // The list of quotes in this level belonging to each leg
  legs?: IRFQBookLevelLeg[]
}

export interface IRFQBookLevelLeg {
  // The instrument to being traded in this leg
  instrument?: string
  // List of all partial/GTT quotes in the level for this leg, sorted from best price to worst
  quotes?: IRFQBookQuote[]
}

export interface IRFQBookQuote {
  // The 128-bit orderID of the RFQ Quote
  quote_id?: bigint
  // The clientOrderID of the RFQ Quote
  client_quote_id?: number
  // The quoter's subaccount
  quoter_subaccount_id?: bigint
  // The timestamp after which Gravity expires the quote, expressed in unix nanoseconds.
  quote_expiration?: bigint
  // GTT quotes are always quoted based on one standard unit of the leg, expressed in quote asset decimal units
  // AON quotes are always quoted based on a single lot of the RFQ structure
  quote_price?: bigint
  // The total number of assets in this quote, expressed without decimals. Negative size = short
  size_no_decimal?: number
}

// There are many features unique to GRVT RFQ. These features are built to maximize RFQ liquidity, and offer traders ultimate configurability, and trading experience.
//
// <ul><li>Over Execution</li><ul><li>RFQ Requestors can execute against all quotes made to them, even beyond the requested RFQ size.</li><li>For instance, if the RFQ Requested for three legs at [5 -10 5] sizes, but receives multiple full quotes that the requestor would like to execute against, the Requestor can do so.</li><li>This means the requestor may execute any multiple of [5 -10 5] sizes, as long as there are sufficient quotes.</li><li>When coupled with the GRVT Partial Execution feature, RFQ Requestors may execute in multiples of [1 -2 1] sizes.</li></ul><li>Partial Quoting</li><ul><li>RFQ Requestors can enable partial quoting on their RFQ via setting `rfq.allowPartial = true`.</li><li>When the RFQ has this setting, Quoters are allowed to supply GTT quotes in any size (at or under requested size).</li><li>Quoters can also choose to quote some legs but not others.</li><li>This is helpful for Quoters if they wish to make directional trades, or if they only quote for linear instruments, but not options.</li><li>If Quoters wish to only allow execution against the full quote, they may supply an AON quote instead.</li></ul><li>Partial Execution</li><ul><li>RFQ Requestors can enable partial execution via setting `rfq.allowPartial = true`.</li><li>Partial execution maximized liquidity, and prices. For instance, if the Requestor wishes to simulate a covered call (Buy Perp, Short Call),</li></li><li>they may receive the best Perp (GTT) quote from one Quoter, and best Call (GTT) quote from another Quoter.</li><li>Requestors may choose to execute against this combination, with a better price that no single Quoter can beat.</li><li>It also offers Requestors more sizing flexibility. Even if the RFQ requested for [5 -10 5] sizes, RFQ Requestors may execute in multiples of [1 -2 1] base ratio sizes.</li><li>This pairs with Over Execution well, where Requestors may even execute against [12 -24 12] sizes.</li></ul><li>Anonymity</li><ul><li>This is helpful when the Requestor or Quoter would like to stay anonymous.</li><li>RFQ Requestor Anonymity is supported via the `rfq.isAnonymous` field.</li><li>RFQ Quoter Anonymity is supported via the `rfqQuote.isAnonymous` field.</li></ul><li>Hide Volume (Under Consideration)</li><ul><li>This is helpful for trading without announcing the executed volume to the public.</li><li>Volume will be hidden as long as either the Requestor or Quoter chooses to hide the volume.</li><li>GRVT will apply the stricter privacy policy.</li><li>eg. Requestor trades [10 -20 10] against two Quoters with [5 -10 5] each.</li><li>If Requestor chooses to hide volume, all [10 -20 10] will be hidden from public.</li><li>If only one Quoter chooses to hide volume, the public will see a trade amounting to [5 -10 5]</li></ul></ul>
export interface IRfq {
  // [Filled by GRVT Backend] A unique 128-bit identifier for the RFQ, deterministically generated within the GRVT backend
  rfq_id?: bigint
  // The subaccount initiating the RFQ
  sub_account_id?: bigint
  // The visibility of the RFQ. Is it public or private?
  is_public?: boolean
  // The strategy of the RFQ
  strategy?: EStrategy
  // The timestamp after which Gravity expires the RFQ, expressed in unix nanoseconds
  expiry?: bigint
  // The list of counterparty subaccount IDs. Ignored for public RFQs
  receipients?: bigint[]
  // RFQ requestor's anonymity to receipients. Defaults false
  is_anonymous?: boolean
  // Allow RFQ Quoter's to supply partial quotes, and allows requestor to execute against partial sizes. Defaults false.
  // When `allowPartial = false`, all quotes submitted to the RFQ must match RFQ size completely, and have `order.TimeInForce = AON`.
  // When `allowPartial = true` && the quote's `order.TimeInForce = AON`, the quote must match RFQ size completely.
  // When `allowPartial = true` && the quote's `order.TimeInForce = GTT`, the quote can be of any size (at or under requested size), and only quote some legs and not others.
  allow_partial?: boolean
  // All legs belonging to the RFQ. Leg size may be positive (long) or negative (short)
  legs?: IRfqLeg[]
  // [Filled by GRVT Backend] All RFQ bids, sorted from best (lowest) price to worst (highest)
  bids?: IRFQBook
  // [Filled by GRVT Backend] All RFQ asks, sorted from best (highest) price to worst (lowest)
  asks?: IRFQBook
  // [Filled by GRVT Backend] Time at which the rfq was received by GRVT, expressed in unix nanoseconds
  create_time?: bigint
  // [Filled by GRVT Backend] The current state of the rfq
  state?: IRfqState
}

export interface IRfqLeg {
  // The instrument to trade in this leg
  instrument?: string
  // The total number of assets to trade in this leg, expressed without decimals. Negative size = short
  size_no_decimal?: number
  // [Filled by GRVT Backend] The relative ratio of this leg to the other legs in this RFQ. Base ratio is standardized (divided) by the GCD.
  // For instance, [5 -10 5] will have a base ratio of [1 -2 1]
  // For RFQs set to `isPartial = false`, quotes must always quote the full size [5 -10 5]
  // For RFQs set to `isPartial = true`, quotes can be AON/GTT
  base_ratio?: number
  // If the leg is a bid or an ask
  is_bid?: boolean
}

export interface IRfqQuote {
  // A unique 128-bit identifier for the RFQ, deterministically generated within the GRVT backend
  rfq_id?: bigint
  // RFQ quoter's anonymity to requestor. Defaults false
  is_anonymous?: boolean
  // The signed smart contract order
  order?: IOrder
}

export interface IRfqState {
  // The RFQ status
  rfq_status?: ERfqStatus
  // The reason for rejection or cancellation
  reject_reason?: ERfqRejectReason
  // Time at which the rfq was updated by GRVT, expressed in unix nanoseconds
  update_time?: bigint
}

export interface ISignature {
  // The address (public key) of the wallet signing the payload
  signer?: bigint
  // Signature R
  r?: bigint
  // Signature S
  s?: bigint
  // Signature V
  v?: number
  // Timestamp after which this signature expires, expressed in unix nanoseconds. Must be capped at 30 days
  expiration?: bigint
  // Users can randomly generate this value, used as a signature deconflicting key.
  // ie. You can send the same exact instruction twice with different nonces.
  // When the same nonce is used, the same payload will generate the same signature.
  // Our system will consider the payload a duplicate, and ignore it.
  nonce?: number
}

export interface ISpotBalance {
  // The currency you hold a spot balance in
  currency?: ECurrency
  // The balance of the asset, expressed in underlying asset decimal units
  // Must take into account the value of all positions with this quote asset
  // ie. for USDT denominated subaccounts, this is is identical to total balance
  balance?: bigint
}

export interface ISubAccount {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The sub account ID this entry refers to
  sub_account_id?: bigint
  // The type of margin algorithm this subaccount uses
  margin_type?: EMarginType
  // The Quote Currency that this Sub Account is denominated in
  // This subaccount can only open derivative positions denominated in this quote currency
  // All other assets are converted to this quote currency for the purpose of calculating margin
  // In the future, when users select a Multi-Currency Margin Type, this will be USD
  quote_currency?: ECurrency
  // The total unrealized PnL of all positions owned by this subaccount, denominated in quote currency decimal units
  unrealized_pnl?: bigint
  // The total value across all spot assets, or in other words, the current margin
  total_value?: bigint
  // The initial margin requirement of all positions owned by this vault, denominated in quote currency decimal units
  initial_margin?: bigint
  // The maintanence margin requirement of all positions owned by this vault, denominated in quote currency decimal units
  maintanence_margin?: bigint
  // The margin available for withdrawal, denominated in quote currency decimal units
  available_margin?: bigint
  // The list of spot assets owned by this sub account, and their balances
  spot_balances?: ISpotBalance[]
  // The list of positions owned by this sub account
  positions?: IPositions[]
}

// Derived data such as the below, will not be included by default:
//   - 24 hour volume (`buyVolume + sellVolume`)
//   - 24 hour taker buy/sell ratio (`buyVolume / sellVolume`)
//   - 24 hour average trade price (`volumeQ / volumeU`)
//   - 24 hour average trade volume (`volume / trades`)
//   - 24 hour percentage change (`24hStatChange / 24hStat`)
//   - 48 hour statistics (`2 * 24hStat - 24hStatChange`)
//
// To query for an extended ticker payload, leverage the `greeks` and the `derived` flags.
// Ticker extensions are currently under design to offer you more convenience.
// These flags are only supported on the `Ticker Snapshot` WS endpoint, and on the `Ticker` API endpoint.
//
export interface ITicker {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The mark price of the instrument, expressed in quote asset decimal units
  mark_price?: bigint
  // The index price of the instrument, expressed in quote asset decimal units
  index_price?: bigint
  // The last traded price of the instrument (also close price), expressed in quote asset decimal units
  last_price?: bigint
  // The number of assets traded in the last trade, expressed in underlying asset decimal units
  last_size?: bigint
  // The mid price of the instrument, expressed in quote asset decimal units
  mid_price?: bigint
  // The best bid price of the instrument, expressed in quote asset decimal units
  best_bid_price?: bigint
  // The number of assets offered on the best bid price of the instrument, expressed in underlying asset decimal units
  best_bid_size?: bigint
  // The best ask price of the instrument, expressed in quote asset decimal units
  best_ask_price?: bigint
  // The number of assets offered on the best ask price of the instrument, expressed in underlying asset decimal units
  best_ask_size?: bigint
  // The current funding rate of the instrument, expressed in centibeeps (1/100th of a basis point)
  funding_rate_curr?: number
  // The average funding rate of the instrument (over last 8h), expressed in centibeeps (1/100th of a basis point)
  funding_rate_avg?: number
  // The interest rate of the underlying, expressed in centibeeps (1/100th of a basis point)
  interest_rate?: number
  // [Options] The forward price of the option, expressed in quote asset decimal units
  forward_price?: bigint
  // The 24 hour taker buy volume of the instrument, expressed in underlying asset decimal units
  buy_volume_u?: bigint
  // The 24 hour taker sell volume of the instrument, expressed in underlying asset decimal units
  sell_volume_u?: bigint
  // The 24 hour taker buy volume of the instrument, expressed in quote asset decimal units
  buy_volume_q?: bigint
  // The 24 hour taker sell volume of the instrument, expressed in quote asset decimal units
  sell_volume_q?: bigint
  // The 24 hour highest traded price of the instrument, expressed in quote asset decimal units
  high_price?: bigint
  // The 24 hour lowest traded price of the instrument, expressed in quote asset decimal units
  low_price?: bigint
  // The 24 hour first traded price of the instrument, expressed in quote asset decimal units
  open_price?: bigint
  // The open interest in the instrument, expressed in underlying asset decimal units
  open_interest?: bigint
  // The ratio of accounts that are net long vs net short on this instrument
  long_short_ratio?: number
}

export interface ITransferHistory {
  // The transaction ID of the transfer
  tx_id?: bigint
  // The account to transfer from
  from_account_id?: bigint
  // The subaccount to transfer from (0 if transferring from main account)
  from_sub_account_id?: bigint
  // The account to deposit into
  to_account_id?: bigint
  // The subaccount to transfer to (0 if transferring to main account)
  to_sub_account_id?: bigint
  // The token currency to transfer
  token_currency?: ECurrency
  // The number of tokens to transfer
  num_tokens?: bigint
  // The signature of the transfer
  signature?: ISignature
  // The timestamp of the transfer in unix nanoseconds
  event_time?: bigint
}

export interface IWSCandlestickFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A candlestick entry matching the request filters
  feed?: ICandlestick
}

export interface IWSCandlestickFeedSelectorV1 {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The interval of each candlestick
  interval?: ECandlestickInterval
  // The type of candlestick data to retrieve
  type?: ECandlestickType
}

export interface IWSCandlestickRequest {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The interval of each candlestick
  interval?: ECandlestickInterval
  // The type of candlestick data to retrieve
  type?: ECandlestickType
}

export interface IWSCandlestickResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // A candlestick entry matching the request filters
  f?: ICandlestick
}

export interface IWSMiniTickerFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A mini ticker matching the request filter
  feed?: IMiniTicker
}

export interface IWSMiniTickerFeedSelectorV1 {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (raw, 50, 100, 200, 500, 1000, 5000)
  // Snapshot (200, 500, 1000, 5000)
  rate?: number
}

export interface IWSMiniTickerRequest {
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (raw, 50, 100, 200, 500, 1000, 5000)
  // Snapshot (200, 500, 1000, 5000)
  rate?: number
  // The expiration time to select in unix nanoseconds
  expiration?: bigint[]
  // The strike price to select
  strike_price?: bigint[]
}

export interface IWSMiniTickerResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // A mini ticker matching the request filter
  f?: IMiniTicker
}

export interface IWSOrderFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // The order object being created or updated
  feed?: IOrder
}

export interface IWSOrderFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply.
  kind?: EKind
  // The underlying filter to apply.
  underlying?: ECurrency
  // The quote filter to apply.
  quote?: ECurrency
  // create only, update only, all
  state_filter?: EOrderStateFilter
}

export interface IWSOrderStateFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // The order state object being created or updated
  feed?: IOrderState
}

export interface IWSOrderbookLevelsFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // An orderbook levels object matching the request filter
  feed?: IOrderbookLevels
}

export interface IWSOrderbookLevelsFeedSelectorV1 {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (100, 200, 500, 1000, 5000)
  // Snapshot (500, 1000, 5000)
  rate?: number
  // Depth of the order book to be retrieved (API/Snapshot max is 100, Delta max is 1000)
  depth?: number
  // The number of levels to aggregate into one level (1 = no aggregation, 10/100/1000 = aggregate 10/100/1000 levels into 1)
  aggregate?: number
}

export interface IWSOrderbookLevelsRequest {
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (100, 200, 500, 1000, 5000)
  // Snapshot (500, 1000, 5000)
  rate?: number
  // Depth of the order book to be retrieved (API/Snapshot max is 100, Delta max is 1000)
  depth?: number
  // The number of levels to aggregate into one level (1 = no aggregation, 10/100/1000 = aggregate 10/100/1000 levels into 1)
  aggregate?: number
  // The expiration time to select in unix nanoseconds
  expiration?: bigint[]
  // The strike price to select
  strike_price?: bigint[]
}

export interface IWSOrderbookLevelsResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // An orderbook levels object matching the request filter
  f?: IOrderbookLevels
}

export interface IWSPositionsFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A Position being created or updated matching the request filter
  feed?: IPositions
}

export interface IWSPositionsFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply.
  kind?: EKind
  // The underlying filter to apply.
  underlying?: ECurrency
  // The quote filter to apply.
  quote?: ECurrency
}

export interface IWSPositionsRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
}

export interface IWSPositionsResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // A Position being created or updated matching the request filter
  f?: IPositions
}

export interface IWSPrivateTradeFeedDataV1 {
  // The websocket channel to which the response is sent
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A private trade matching the request filter
  feed?: IPrivateTrade
}

export interface IWSPrivateTradeFeedSelectorV1 {
  // The sub account ID to request for
  sub_account_id?: bigint
  // The kind filter to apply.
  kind?: EKind
  // The underlying filter to apply.
  underlying?: ECurrency
  // The quote filter to apply.
  quote?: ECurrency
}

export interface IWSPrivateTradeRequest {
  // The sub account ID to request for
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
}

export interface IWSPrivateTradeResponse {
  // The websocket channel to which the response is sent
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // A private trade matching the request filter
  f?: IPrivateTrade
}

export interface IWSPublicTradesFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A public trade matching the request filter
  feed?: IPublicTrade
}

export interface IWSPublicTradesFeedSelectorV1 {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
}

export interface IWSPublicTradesRequest {
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // Filter query by venue where trade occured
  venue?: EVenue[]
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The expiration time to select in unix nanoseconds
  expiration?: bigint[]
  // The strike price to select
  strike_price?: bigint[]
}

export interface IWSPublicTradesResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // A public trade matching the request filter
  f?: IPublicTrade
}

export interface IWSRequestV1 {
  // The channel to subscribe to (eg: ticker.s / ticker.d
  stream?: string
  // The list of feeds to subscribe to (eg:
  feed?: string[]
  // The method to use for the request (eg: subscribe / unsubscribe)
  method?: string
  // Whether the request is for full data or lite data
  is_full?: boolean
}

export interface IWSResponseV1 {
  // The channel to subscribe to (eg: ticker.s / ticker.d
  stream?: string
  // The list of feeds subscribed to
  subs?: string[]
  // The list of feeds unsubscribed to
  unsubs?: string[]
}

export interface IWSRfqFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // The Rfq being created or updated
  feed?: IRfq
}

export interface IWSRfqFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply.
  kind?: EKind
  // The underlying filter to apply.
  underlying?: ECurrency
  // The quote filter to apply.
  quote?: ECurrency
}

export interface IWSRfqQuoteFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // The RfqQuote being created or updated
  feed?: IRfqQuote
}

export interface IWSRfqQuoteFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply.
  kind?: EKind
  // The underlying filter to apply.
  underlying?: ECurrency
  // The quote filter to apply.
  quote?: ECurrency
}

export interface IWSRfqQuoteRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
}

export interface IWSRfqQuoteResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // The RfqQuote being created or updated
  f?: IRfqQuote
}

export interface IWSRfqRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
}

export interface IWSRfqResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // The Rfq being created or updated
  f?: IRfq
}

export interface IWSTickerFeedDataV1 {
  // Stream name
  stream?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A ticker matching the request filter
  feed?: ITicker
}

export interface IWSTickerFeedSelectorV1 {
  // The readable name of the instrument. For Perpetual: ETH_USDT_Perp [Underlying Quote Perp]
  // For Future: BTC_USDT_Fut_20Oct23 [Underlying Quote Fut DateFormat]
  // For Call: ETH_USDT_Call_20Oct23_4123 [Underlying Quote Call DateFormat StrikePrice]
  // For Put: ETH_USDT_Put_20Oct23_4123 [Underlying Quote Put DateFormat StrikePrice]
  instrument?: string
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (100, 200, 500, 1000, 5000)
  // Snapshot (500, 1000, 5000)
  rate?: number
}

export interface IWSTickerRequest {
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (100, 200, 500, 1000, 5000)
  // Snapshot (500, 1000, 5000)
  rate?: number
  // The expiration time to select in unix nanoseconds
  expiration?: bigint[]
  // The strike price to select
  strike_price?: bigint[]
}

export interface IWSTickerResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // A ticker matching the request filter
  f?: ITicker
}

export interface IWithdrawalHistory {
  // The transaction ID of the withdrawal
  tx_id?: bigint
  // The subaccount to withdraw from
  from_account_id?: bigint
  // The ethereum address to withdraw to
  to_eth_address?: bigint
  // The token currency to withdraw
  token_currency?: ECurrency
  // The number of tokens to withdraw
  num_tokens?: bigint
  // The signature of the withdrawal
  signature?: ISignature
  // The timestamp of the withdrawal in unix nanoseconds
  event_time?: bigint
}

export interface IWsOrderRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // Only streams created orders in this stream. If false, updated orders will also be streamed
  create_only?: boolean
}

export interface IWsOrderResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // The order object being created or updated
  f?: IOrder
}

export interface IWsOrderStateRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be returned
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // Only streams updated orders in this stream. If false, created orders will also reflect here
  update_only?: boolean
}

export interface IWsOrderStateResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // The order state object being created or updated
  f?: IOrderState
}
