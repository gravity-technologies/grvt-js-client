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

// |                       | Must Fill All | Can Fill Partial || -                     | -             | -                || Must Fill Immediately | FOK           | IOC              || Can Fill Till Time    | AON           | GTC              |
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

// The condition that triggers a take profit or stop loss order
// AT LAUNCH, ONLY INDEX WILL BE SUPPORTED
export enum ETriggerCondition {
  // INDEX - Order is activated when the index price reaches the trigger price
  INDEX = 'INDEX',
  // LAST - Order is activated when the last trade price reaches the trigger price
  LAST = 'LAST',
  // MID - Order is activated when the mid price reaches the trigger price
  MARKET = 'MARKET',
  // MARK - Order is activated when the mark price reaches the trigger price
  MARK = 'MARK',
  // TRAILING - Order is activated when the mid price trails the peak mid price after order placement by a certain USD value
  TRAILING = 'TRAILING',
  // TRAILING_PERCENT - Order is activated when the mid price trails the peak mid price after order placement by a certain percentage
  TRAILING_PERCENT = 'TRAILING_PERCENT',
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

// A Tradeable (or previously tradeable) instrument in GRVT. Currently supports options/futures/perpetuals of various expiries and strikes.
export interface IAsset {
  // The kind of the instrument
  kind?: EKind
  // The underlying asset of the instrument
  underlying?: ECurrency
  // The quote asset of the instrument
  quote?: ECurrency
  // Time at which the instrument expires expressed in unix nanoseconds ('null' for perpetuals)
  expiration?: bigint
  // The options strike price expressed in quote currency decimal units
  strike_price?: bigint
}

export interface IAPIMiniTickerRequest {
  // The asset being represented
  asset?: IAsset
}

export interface IAPIOrderbookLevelsRequest {
  // The asset being represented
  asset?: IAsset
  // Depth of the order book to be retrieved (API/Snapshot max is 100, Delta max is 1000)
  depth?: number
  // The number of levels to aggregate into one level (1 = no aggregation, 10/100/1000 = aggregate 10/100/1000 levels into 1)
  aggregate?: number
}

export interface IApiCancelAllOrdersRequest {
  // The subaccount ID to filter by
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
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The order to cancel
  order_id?: bigint
  // The order to cancel
  client_order_id?: number
}

export interface IApiCancelOrderResponse {
  // The cancelled order
  order?: IOrder
}

export interface IApiCancelRfqQuoteRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The RFQ Quote to cancel
  quote_id?: bigint
  // The RFQ Quote to cancel
  client_quote_id?: number
}

export interface IApiCancelRfqQuoteResponse {
  // The cancelled RFQ Quote
  rfq_quote?: IRfqQuote
}

export interface IApiCancelRfqRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The RFQ to cancel
  rfq_id?: bigint
  // The RFQ to cancel
  client_quote_id?: number
}

export interface IApiCancelRfqResponse {
  // The cancelled RFQ
  rfq?: IRfq
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

// Fetch a single instrument by supplying the asset or instrument name
export interface IApiGetInstrumentRequest {
  // The asset used throughout all APIs as an instrument identifier
  asset?: IAsset
  // The readable name of the instrument
  instrument_name?: string
}

export interface IApiGetInstrumentResponse {
  // The instrument matching the request asset
  results?: IInstrument
}

export interface IApiGetInstrumentsRequest {
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
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
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
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

export interface IApiOrderbookLevelsResponse {
  // The orderbook levels objects matching the request asset
  results?: IOrderbookLevels
}

export interface IApiPositionsRequest {
  // The sub account ID to request for
  sub_account_id?: bigint
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
  quote?: ECurrency[]
}

export interface IApiPositionsResponse {
  // The positions matching the request filter
  results?: IPositions[]
}

export interface IApiRecentTradeRequest {
  // The asset being represented
  asset?: IAsset
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
}

export interface IApiRecentTradeResponse {
  // The public trades matching the request asset
  results?: IPublicTrade[]
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

export interface IApiTickerRequest {
  // The asset being represented
  asset?: IAsset
  // Boolean flag to specify if Greeks are required
  greeks?: boolean
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

export interface IGreeks {
  // UnderlyingPrice is the underlying asset price used to calculate the greeks, expressed in underlying asset decimal units
  underlying_price?: bigint
  // RiskFreeRate used to calculate the greeks, expressed in underlying asset decimal units
  risk_free_rate?: number
  // Delta is the sensitivity of the option price to the underlying asset price
  delta?: number
  // Gamma is the sensitivity of the option delta to the underlying asset price
  gamma?: number
  // IV is the underlying asset implied volatility
  iv?: number
  // Vega is the sensitivity of the option price to the underlying asset implied volatility
  vega?: number
  // Volga is the sensitivity of the option vega to the underlying asset implied volatility
  volga?: number
  // Vanna is the sensitivity of the option delta to the underlying asset implied volatility
  vanna?: number
  // Theta is the sensitivity of the option price to the time to expiration
  theta?: number
  // Rho is the sensitivity of the option price to the risk free rate
  rho?: number
}

export interface IInstrument {
  // The asset referenced by the instrument
  asset?: IAsset
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
  // The asset being represented
  asset?: IAsset
  // The mark price of the instrument, expressed in quote asset decimal units
  mark_price?: bigint
  // The index price of the instrument, expressed in quote asset decimal units
  index_price?: bigint
  // The last traded price of the instrument, expressed in quote asset decimal units
  last_price?: bigint
  // The number of assets traded in the last trade, expressed in underlying asset decimal units
  last_size?: bigint
  // The mid price of the instrument, expressed in quote asset decimal units
  mid_price?: bigint
  // The best bid price of the instrument, expressed in quote asset decimal units
  best_bid_price?: bigint
  // The number of assets offered on the best bid price of the instrument, expressed in underlying asset decimal units
  best_bid_size?: bigint
  // The number of open orders at the best bid level
  best_bid_num_orders?: number
  // The best ask price of the instrument, expressed in quote asset decimal units
  best_ask_price?: bigint
  // The number of assets offered on the best ask price of the instrument, expressed in underlying asset decimal units
  best_ask_size?: bigint
  // The number of open orders at the best ask level
  best_ask_num_orders?: number
}

export interface IOrder {
  // [Filled by GRVT Backend] A unique 128-bit identifier for the order, deterministically generated within the GRVT backend
  order_id?: bigint
  // The subaccount initiating the order
  sub_account_id?: bigint
  // If the order is a market order
  // Market Orders do not have a limit price, and are always executed according to the maker order price.
  // Market Orders must always be taker orders
  is_market?: boolean
  // Four supported types of orders: GTT, IOC, AON, FOK
  // PARTIAL EXECUTION = GTT / IOC - allows partial size execution on each leg
  // FULL EXECUTION = AON / FOK - only allows full size execution on all legs
  // TAKER ONLY = IOC / FOK - only allows taker orders
  // MAKER OR TAKER = GTT / AON - allows maker or taker orders
  // Exchange only supports (GTT, IOC, FOK)
  // RFQ Maker only supports (GTT, AON), RFQ Taker only supports (FOK)
  time_in_force?: ETimeInForce
  // ONLY APPLICABLE WHEN TimeInForce = AON / FOK AND IsMarket = FALSE
  // The limit price of the full order, expressed in quote asset decimal units.
  // This is the total amount of base currency to pay/receive for all legs.
  limit_price?: bigint
  // ONLY APPLICABLE WHEN TimeInForce = AON / FOK AND IsMarket = FALSE AND IsOCO = TRUE
  // If a OCO order is specified, this must contain the other limit price
  // User must sign both limit prices, and GRVT Backend is free to swap them depending on which trigger is activated
  // The smart contract will always validate both limit prices, by arranging them in ascending order
  oco_limit_price?: bigint
  // The taker fee percentage cap signed by the order.
  // This is the maximum taker fee percentage the order sender is willing to pay for the order.
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
  // ONLY APPLICABLE WHEN TimeInForce = AON / FOK
  // A flag to indicate whether the full order is paying base currency or receiving base currency.
  is_paying_base_currency?: boolean
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
  // The asset to trade in this leg
  asset?: IAsset
  // The total number of assets to trade in this leg, expressed in underlying asset decimal units.
  size?: bigint
  // ONLY APPLICABLE WHEN TimeInForce = GTT / IOC AND IsMarket = FALSE
  // The limit price of the order leg, expressed in quote asset decimal units.
  // This is the total amount of base currency to pay/receive for all legs.
  limit_price?: bigint
  // ONLY APPLICABLE WHEN TimeInForce = GTT / IOC AND IsMarket = FALSE AND IsOCO = TRUE
  // If a OCO order is specified, this must contain the other limit price
  // User must sign both limit prices, and activator is free to swap them depending on which trigger is activated
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
  // The type of take profit order to place. Both can be used at once to specify a TPSL (OCO) order
  take_profit_trigger_condition?: ETriggerCondition
  // The type of stop loss order to place. Both can be used at once to specify a TPSL (OCO) order
  stop_loss_trigger_condition?: ETriggerCondition
  // The Take Profit Trigger Price of the order, expressed in quote asset decimal units.If takeProfitTriggerCondition is percentage based, this will be interpreted as 0.01 bps, eg. 100 = 1bps
  take_profit_trigger_price?: bigint
  // The Stop Loss Trigger Price of the order, expressed in quote asset decimal units.If stopLossTriggerCondition is percentage based, this will be interpreted as 0.01 bps, eg. 100 = 1bps
  stop_loss_trigger_price?: bigint
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
  // The asset being represented
  asset?: IAsset
  // The list of best bids up till query depth
  bids?: IOrderbookLevel[]
  // The list of best asks up till query depth
  asks?: IOrderbookLevel[]
}

export interface IPositions {
  // The asset being represented
  asset?: IAsset
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
  // The asset being represented
  asset?: IAsset
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
  // The realized PnL of the trade, expressed in quote asset decimal units (0 if increasing position size)
  realized_pnl?: bigint
  // The fees paid on the trade
  fee?: bigint
  // The fee rate paid on the trade
  fee_rate?: number
  // A trade identifier
  trade_id?: bigint
  // An order identifier
  order_id?: bigint
  // The venue where the trade occurred
  venue?: EVenue
  // Options Greeks at point of trade
  greeks?: IGreeks
}

// All private RFQs and Private AXEs will be filtered out from the responses
export interface IPublicTrade {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The asset being represented
  asset?: IAsset
  // If taker was the buyer on the trade
  is_taker_buyer?: boolean
  // The number of assets being traded, expressed in underlying asset decimal units
  size?: bigint
  // The traded price, expressed in quote asset decimal units
  price?: bigint
  // The mark price of the instrument at point of trade, expressed in quote asset decimal units
  mark_price?: bigint
  // A trade identifier
  trade_id?: bigint
  // The venue where the trade occurred
  venue?: EVenue
  // Options Greeks at point of trade
  greeks?: IGreeks
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
  // The asset to being traded in this leg
  asset?: IAsset
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
  // The asset to trade in this leg
  asset?: IAsset
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

// hello world
// good day
export interface ITicker {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The asset being represented
  asset?: IAsset
  // The mark price of the instrument, expressed in quote asset decimal units
  mark_price?: bigint
  // The index price of the instrument, expressed in quote asset decimal units
  index_price?: bigint
  // The last traded price of the instrument, expressed in quote asset decimal units
  last_price?: bigint
  // The number of assets traded in the last trade, expressed in underlying asset decimal units
  last_size?: bigint
  // The mid price of the instrument, expressed in quote asset decimal units
  mid_price?: bigint
  // The best bid price of the instrument, expressed in quote asset decimal units
  best_bid_price?: bigint
  // The number of assets offered on the best bid price of the instrument, expressed in underlying asset decimal units
  best_bid_size?: bigint
  // The number of open orders at the best bid level
  best_bid_num_orders?: number
  // The best ask price of the instrument, expressed in quote asset decimal units
  best_ask_price?: bigint
  // The number of assets offered on the best ask price of the instrument, expressed in underlying asset decimal units
  best_ask_size?: bigint
  // The number of open orders at the best ask level
  best_ask_num_orders?: number
  // The 24 hour volume of the instrument, expressed in underlying asset decimal units
  volume?: bigint
  // The 24 hour volume change of the instrument
  volume_change?: number
  // The 24 hour quote volume of the instrument, expressed in quote asset decimal units
  quote_volume?: bigint
  // The 24 hour quote volume change of the instrument
  quote_volume_change?: number
  // The number of taker buy trades in the last 24 hours
  taker_buy_trades?: number
  // The number of taker buy trades change in the last 24 hours
  taker_buy_trades_change?: number
  // The number of maker buy trades in the last 24 hours
  maker_buy_trades?: number
  // The number of maker buy trades change in the last 24 hours
  maker_buy_trades_change?: number
  // The 24 hour highest traded price of the instrument, expressed in underlying asset decimal units
  high_price?: bigint
  // The 24 hour lowest traded price of the instrument, expressed in underlying asset decimal units
  low_price?: bigint
  // The next funding rate of the instrument, expressed in underlying asset decimal units
  next_funding_rate?: bigint
  // The next funding timestamp of the instrument, expressed in unix nanoseconds
  next_funding_at?: bigint
  // The open interest in the instrument, expressed in underlying asset decimal units
  open_interest?: bigint
  // The 24 hour number of trades in the instrument (takerBuyTrades + makerBuyTrades)
  num_trades?: number
  // The 24 hour number of trades change in the instrument
  num_trades_change?: number
  // The 24 hour taker buy/sell ratio in the instrument (takerBuyTrades / (takerBuyTrades + makerBuyTrades))
  taker_buy_sell_ratio?: number
  // The 24 hour taker buy/sell ratio change in the instrument
  taker_buy_sell_ratio_change?: number
  // The average trade price in the instrument, expressed in quote asset decimal units (quoteVolume / volume)
  avg_price?: bigint
  // The average trade price change in the instrument
  avg_price_change?: number
  // The average trade volume in the instrument, expressed in underlying asset decimal units (volume / numTrades)
  avg_volume?: bigint
  // The average trade volume change in the instrument, expressed in underlying asset decimal units
  avg_volume_change?: number
  // Options Greeks
  greeks?: IGreeks
}

export interface IWSMiniTickerRequest {
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
  quote?: ECurrency[]
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (raw, 50, 100, 200, 500, 1000, 5000)
  // Snapshot (200, 500, 1000, 5000)
  rate?: number
}

export interface IWSMiniTickerResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // A mini ticker matching the request filter
  f?: IMiniTicker
}

export interface IWSOrderbookLevelsRequest {
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
  quote?: ECurrency[]
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (100, 200, 500, 1000, 5000)
  // Snapshot (500, 1000, 5000)
  rate?: number
  // Depth of the order book to be retrieved (API/Snapshot max is 100, Delta max is 1000)
  depth?: number
  // The number of levels to aggregate into one level (1 = no aggregation, 10/100/1000 = aggregate 10/100/1000 levels into 1)
  aggregate?: number
}

export interface IWSOrderbookLevelsResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // An orderbook levels object matching the request filter
  f?: IOrderbookLevels
}

export interface IWSPositionsRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
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

export interface IWSPrivateTradeRequest {
  // The sub account ID to request for
  sub_account_id?: bigint
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
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

export interface IWSRecentTradeRequest {
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
  quote?: ECurrency[]
  // Filter query by venue where trade occured
  venue?: EVenue[]
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
}

export interface IWSRecentTradeResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // A public trade matching the request filter
  f?: IPublicTrade
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

export interface IWSTickerRequest {
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
  quote?: ECurrency[]
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (100, 200, 500, 1000, 5000)
  // Snapshot (500, 1000, 5000)
  rate?: number
  // Boolean flag to specify if Greeks are required
  greeks?: boolean
}

export interface IWSTickerResponse {
  // Stream name
  s?: string
  // A running sequence number that determines global message order within the specific stream
  n?: bigint
  // A ticker matching the request filter
  f?: ITicker
}

export interface IWsOrderRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
  quote?: ECurrency[]
  // Only streams created orders in this stream. If false, created order will also reflect here
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
  // The kind of the instrument
  kind?: EKind[]
  // The underlying asset of the instrument
  underlying?: ECurrency[]
  // The quote asset of the instrument
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
