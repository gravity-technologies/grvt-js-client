export enum EBridgeType {
  // XY Bridge type
  XY = 'XY',
  // Rhino Bridge type
  RHINO = 'RHINO',
}

// BrokerTag is a tag for the broker that the order is sent from.
export enum EBrokerTag {
  UNSPECIFIED = 'UNSPECIFIED',
  // CoinRoutes
  COIN_ROUTES = 'COIN_ROUTES',
  // Alertatron
  ALERTATRON = 'ALERTATRON',
  // Origami
  ORIGAMI = 'ORIGAMI',
}

export enum ECancelStatus {
  // Cancellation has expired because corresponding order had not arrived within the defined time-to-live window.
  EXPIRED = 'EXPIRED',
  // This cancellation request was dropped because its TTL window overlaps with another cancellation request for the same order.
  DROPPED_DUPLICATE = 'DROPPED_DUPLICATE',
}

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
  // the USD fiat currency
  USD = 'USD',
  // the USDC token
  USDC = 'USDC',
  // the USDT token
  USDT = 'USDT',
  // the ETH token
  ETH = 'ETH',
  // the BTC token
  BTC = 'BTC',
  // the SOL token
  SOL = 'SOL',
  // the ARB token
  ARB = 'ARB',
  // the BNB token
  BNB = 'BNB',
  // the ZK token
  ZK = 'ZK',
  // the POL token
  POL = 'POL',
  // the OP token
  OP = 'OP',
  // the ATOM token
  ATOM = 'ATOM',
  // the 1000PEPE token
  KPEPE = 'KPEPE',
  // the TON token
  TON = 'TON',
  // the XRP token
  XRP = 'XRP',
  // the XLM token
  XLM = 'XLM',
  // the WLD token
  WLD = 'WLD',
  // the WIF token
  WIF = 'WIF',
  // the VIRTUAL token
  VIRTUAL = 'VIRTUAL',
  // the TRUMP token
  TRUMP = 'TRUMP',
  // the SUI token
  SUI = 'SUI',
  // the 1000SHIB token
  KSHIB = 'KSHIB',
  // the POPCAT token
  POPCAT = 'POPCAT',
  // the PENGU token
  PENGU = 'PENGU',
  // the LINK token
  LINK = 'LINK',
  // the 1000BONK token
  KBONK = 'KBONK',
  // the JUP token
  JUP = 'JUP',
  // the FARTCOIN token
  FARTCOIN = 'FARTCOIN',
  // the ENA token
  ENA = 'ENA',
  // the DOGE token
  DOGE = 'DOGE',
  // the AIXBT token
  AIXBT = 'AIXBT',
  // the AI16Z token
  AI16Z = 'AI16Z',
  // the ADA token
  ADA = 'ADA',
  // the AAVE token
  AAVE = 'AAVE',
  // the BERA token
  BERA = 'BERA',
  // the VINE token
  VINE = 'VINE',
  // the PENDLE token
  PENDLE = 'PENDLE',
  // the UXLINK token
  UXLINK = 'UXLINK',
  // the KAITO token
  KAITO = 'KAITO',
  // the IP token
  IP = 'IP',
}

export enum EEpochBadgeType {
  // Champion
  CHAMPION = 'CHAMPION',
  // Legend
  LEGEND = 'LEGEND',
  // Veteran
  VETERAN = 'VETERAN',
  // Elite
  ELITE = 'ELITE',
  // Master
  MASTER = 'MASTER',
  // Expert
  EXPERT = 'EXPERT',
  // Warrior
  WARRIOR = 'WARRIOR',
  // Sergeant
  SERGEANT = 'SERGEANT',
  // Ranger
  RANGER = 'RANGER',
  // Challenger
  CHALLENGER = 'CHALLENGER',
  // Apprentice
  APPRENTICE = 'APPRENTICE',
  // Rookie
  ROOKIE = 'ROOKIE',
}

export enum EInstrumentSettlementPeriod {
  // Instrument settles through perpetual funding cycles
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
  // order is not cancelled or rejected
  UNSPECIFIED = 'UNSPECIFIED',
  // client called a Cancel API
  CLIENT_CANCEL = 'CLIENT_CANCEL',
  // client called a Bulk Cancel API
  CLIENT_BULK_CANCEL = 'CLIENT_BULK_CANCEL',
  // client called a Session Cancel API, or set the WebSocket connection to 'cancelOrdersOnTerminate'
  CLIENT_SESSION_END = 'CLIENT_SESSION_END',
  // the market order was cancelled after no/partial fill. Lower precedence than other TimeInForce cancel reasons
  MARKET_CANCEL = 'MARKET_CANCEL',
  // the IOC order was cancelled after no/partial fill
  IOC_CANCEL = 'IOC_CANCEL',
  // the AON order was cancelled as it could not be fully matched
  AON_CANCEL = 'AON_CANCEL',
  // the FOK order was cancelled as it could not be fully matched
  FOK_CANCEL = 'FOK_CANCEL',
  // the order was cancelled as it has expired
  EXPIRED = 'EXPIRED',
  // the post-only order could not be posted into the orderbook
  FAIL_POST_ONLY = 'FAIL_POST_ONLY',
  // the reduce-only order would have caused position size to increase
  FAIL_REDUCE_ONLY = 'FAIL_REDUCE_ONLY',
  // the order was cancelled due to market maker protection trigger
  MM_PROTECTION = 'MM_PROTECTION',
  // the order was cancelled due to self-trade protection trigger
  SELF_TRADE_PROTECTION = 'SELF_TRADE_PROTECTION',
  // the order matched with another order from the same sub account
  SELF_MATCHED_SUBACCOUNT = 'SELF_MATCHED_SUBACCOUNT',
  // an active order on your sub account shares the same clientOrderId
  OVERLAPPING_CLIENT_ORDER_ID = 'OVERLAPPING_CLIENT_ORDER_ID',
  // the order will bring the sub account below initial margin requirement
  BELOW_MARGIN = 'BELOW_MARGIN',
  // the sub account is liquidated (and all open orders are cancelled by Gravity)
  LIQUIDATION = 'LIQUIDATION',
  // instrument is invalid or not found on Gravity
  INSTRUMENT_INVALID = 'INSTRUMENT_INVALID',
  // instrument is no longer tradable on Gravity. (typically due to a market halt, or instrument expiry)
  INSTRUMENT_DEACTIVATED = 'INSTRUMENT_DEACTIVATED',
  // system failover resulting in loss of order state
  SYSTEM_FAILOVER = 'SYSTEM_FAILOVER',
  // the credentials used (userSession/apiKeySession/walletSignature) is not authorised to perform the action
  UNAUTHORISED = 'UNAUTHORISED',
  // the session key used to sign the order expired
  SESSION_KEY_EXPIRED = 'SESSION_KEY_EXPIRED',
  // the subaccount does not exist
  SUB_ACCOUNT_NOT_FOUND = 'SUB_ACCOUNT_NOT_FOUND',
  // the signature used to sign the order has no trade permission
  NO_TRADE_PERMISSION = 'NO_TRADE_PERMISSION',
  // the order payload does not contain a supported TimeInForce value
  UNSUPPORTED_TIME_IN_FORCE = 'UNSUPPORTED_TIME_IN_FORCE',
  // the order has multiple legs, but multiple legs are not supported by this venue
  MULTI_LEGGED_ORDER = 'MULTI_LEGGED_ORDER',
  // the order would have caused the subaccount to exceed the max position size
  EXCEED_MAX_POSITION_SIZE = 'EXCEED_MAX_POSITION_SIZE',
  // the signature supplied is more than 30 days in the future
  EXCEED_MAX_SIGNATURE_EXPIRATION = 'EXCEED_MAX_SIGNATURE_EXPIRATION',
  // the market order has a limit price set
  MARKET_ORDER_WITH_LIMIT_PRICE = 'MARKET_ORDER_WITH_LIMIT_PRICE',
  // client cancel on disconnect triggered
  CLIENT_CANCEL_ON_DISCONNECT_TRIGGERED = 'CLIENT_CANCEL_ON_DISCONNECT_TRIGGERED',
  // the OCO counter part order was triggered
  OCO_COUNTER_PART_TRIGGERED = 'OCO_COUNTER_PART_TRIGGERED',
  // the remaining order size was cancelled because it exceeded current position size
  REDUCE_ONLY_LIMIT = 'REDUCE_ONLY_LIMIT',
  // the order was replaced by a client replace request
  CLIENT_REPLACE = 'CLIENT_REPLACE',
}

export enum EOrderStatus {
  // Order has been sent to the matching engine and is pending a transition to open/filled/rejected.
  PENDING = 'PENDING',
  // Order is actively matching on the matching engine, could be unfilled or partially filled.
  OPEN = 'OPEN',
  // Order is fully filled and hence closed. Taker Orders can transition directly from pending to filled, without going through open.
  FILLED = 'FILLED',
  // Order is rejected by matching engine since if fails a particular check (See OrderRejectReason). Once an order is open, it cannot be rejected.
  REJECTED = 'REJECTED',
  // Order is cancelled by the user using one of the supported APIs (See OrderRejectReason). Before an order is open, it cannot be cancelled.
  CANCELLED = 'CANCELLED',
}

export enum ERewardEpochStatus {
  // Past
  PAST = 'PAST',
  // Current
  CURRENT = 'CURRENT',
  // Future
  FUTURE = 'FUTURE',
}

export enum ERewardProgramType {
  ECOSYSTEM = 'ECOSYSTEM',
  TRADER = 'TRADER',
  LP = 'LP',
}

// Defines the source of the order or trade, such as a UI, API, or a bot.
// This is used to track the source of the order, and is not signed by the client
export enum ESource {
  // The order/trade was created by a web client
  WEB = 'WEB',
  // The order/trade was created by a mobile client
  MOBILE = 'MOBILE',
  // The order/trade was created by an API client
  API = 'API',
  // The order/trade was created by the liquidator service
  LIQUIDATOR = 'LIQUIDATOR',
}

export enum ESubAccountTradeInterval {
  // 1 month
  SAT_1_MO = 'SAT_1_MO',
  // 1 day
  SAT_1_D = 'SAT_1_D',
  // 1 hour
  SAT_1_H = 'SAT_1_H',
  // 4 hour
  SAT_4_H = 'SAT_4_H',
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
  // RPI - A GTT + PostOnly maker order, that can only be taken by non-algorithmic UI users.
  RETAIL_PRICE_IMPROVEMENT = 'RETAIL_PRICE_IMPROVEMENT',
}

// Time interval can be used as a filter in metric/portfolio management APIs
export enum ETimeInterval {
  // 1 day
  INTERVAL_1_D = 'INTERVAL_1_D',
  // 7 days
  INTERVAL_7_D = 'INTERVAL_7_D',
  // 30 days
  INTERVAL_30_D = 'INTERVAL_30_D',
  // 90 days
  INTERVAL_90_D = 'INTERVAL_90_D',
}

export enum ETransferType {
  // Standard transfer that has nothing to do with bridging
  STANDARD = 'STANDARD',
  // Fast Arb Deposit Metadata type
  FAST_ARB_DEPOSIT = 'FAST_ARB_DEPOSIT',
  // Fast Arb Withdrawal Metadata type
  FAST_ARB_WITHDRAWAL = 'FAST_ARB_WITHDRAWAL',
  // Transfer type for non native bridging deposit
  NON_NATIVE_BRIDGE_DEPOSIT = 'NON_NATIVE_BRIDGE_DEPOSIT',
  // Transfer type for non native bridging withdrawal
  NON_NATIVE_BRIDGE_WITHDRAWAL = 'NON_NATIVE_BRIDGE_WITHDRAWAL',
}

// Defines the price type that activates a Take Profit (TP) or Stop Loss (SL) order.
//
// Trigger orders are executed when the selected price type reaches the specified trigger price.Different price types ensure flexibility in executing strategies based on market conditions.
//
//
export enum ETriggerBy {
  // no trigger condition
  UNSPECIFIED = 'UNSPECIFIED',
  // INDEX - Order is activated when the index price reaches the trigger price
  INDEX = 'INDEX',
  // LAST - Order is activated when the last trade price reaches the trigger price
  LAST = 'LAST',
}

// Defines the type of trigger order used in trading, such as Take Profit or Stop Loss.
//
// Trigger orders allow execution based on pre-defined price conditions rather than immediate market conditions.
//
//
export enum ETriggerType {
  // Not a trigger order. The order executes normally without any trigger conditions.
  UNSPECIFIED = 'UNSPECIFIED',
  // Take Profit Order - Executes when the price reaches a specified level to secure profits.
  TAKE_PROFIT = 'TAKE_PROFIT',
  // Stop Loss Order - Executes when the price reaches a specified level to limit losses.
  STOP_LOSS = 'STOP_LOSS',
}

export enum EVaultType {
  // Prime vault
  PRIME = 'PRIME',
  // Launchpad vault
  LAUNCH_PAD = 'LAUNCH_PAD',
}

// The list of Trading Venues that are supported on the GRVT exchange
export enum EVenue {
  // the trade is cleared on the orderbook venue
  ORDERBOOK = 'ORDERBOOK',
  // the trade is cleared on the RFQ venue
  RFQ = 'RFQ',
}

export interface IAPISettlementPrice {
  // The base currency of the settlement price
  base?: ECurrency
  // The quote currency of the settlement price
  quote?: ECurrency
  // The settlement timestamp of the settlement price, expressed in unix nanoseconds
  settlement_time?: string
  // The settlement price, expressed in `9` decimals
  settlement_price?: string
}

export interface IAck {
  // Gravity has acknowledged that the request has been successfully received and it will process it in the backend
  ack?: boolean
}

// Used to acknowledge a request has been received and will be processed
export interface IAckResponse {
  // The Ack Object
  result?: IAck
}

export interface IAggregatedAccountSummary {
  // The main account ID of the account to which the summary belongs
  main_account_id?: string
  // Total equity of the main (+ sub) account, denominated in USD
  total_equity?: string
  // The list of spot assets owned by this main (+ sub) account, and their balances
  spot_balances?: ISpotBalance[]
}

// The aggregated account summary, that reports the total equity and spot balances of a funding (main) account, and its constituent trading (sub) accounts
export interface IApiAggregatedAccountSummaryResponse {
  // The aggregated account summary
  result?: IAggregatedAccountSummary
}

// Cancel all orders on the orderbook for this trading account. This may not match new orders in flight.
export interface IApiCancelAllOrdersRequest {
  // The subaccount ID cancelling all orders
  sub_account_id?: string
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be cancelled
  kind?: EKind[]
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be cancelled
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be cancelled
  quote?: ECurrency[]
}

export interface IApiCancelAllOrdersResponse {
  // The number of orders cancelled
  result?: number
}

// Auto-Cancel All Open Orders when the countdown time hits zero.
//
// Market Maker inputs a countdown time parameter in milliseconds (e.g. 120000 for 120s) rounded down to the smallest second follows the following logic:
//   - Market Maker initially entered a value between 0 -> 1000, which is rounded to 0: will result in termination of their COD
//   - Market Maker initially entered a value between 1001 -> 300_000, which is rounded to the nearest second: will result in refresh of their COD
//   - Market Maker initially entered a value bigger than 300_000, which will result in error (upper bound)
// Market Maker will send a heartbeat message by calling the endpoint at specific intervals (ex. every 30 seconds) to the server to refresh the count down.
//
// If the server does not receive a heartbeat message within the countdown time, it will cancel all open orders for the specified Sub Account ID.
export interface IApiCancelOnDisconnectRequest {
  // The subaccount ID cancelling the orders for
  sub_account_id?: string
  // Countdown time in milliseconds (ex. 120000 for 120s).
  //
  // 0 to disable the timer.
  //
  // Does not accept negative values.
  //
  // Minimum acceptable value is 1,000.
  //
  // Maximum acceptable value is 300,000
  countdown_time?: string
}

// Cancel an order on the orderbook for this trading account. Either `order_id` or `client_order_id` must be provided.
export interface IApiCancelOrderRequest {
  // The subaccount ID cancelling the order
  sub_account_id?: string
  // Cancel the order with this `order_id`
  order_id?: string
  // Cancel the order with this `client_order_id`
  client_order_id?: string
  // Specifies the time-to-live (in milliseconds) for this cancellation.
  // During this period, any order creation with a matching `client_order_id` will be cancelled and not be added to the GRVT matching engine.
  // This mechanism helps mitigate time-of-flight issues where cancellations might arrive before the corresponding orders.
  // Hence, cancellation by `order_id` ignores this field as the exchange can only assign `order_id`s to already-processed order creations.
  // The duration cannot be negative, is rounded down to the nearest 100ms (e.g., `'670'` -> `'600'`, `'30'` -> `'0'`) and capped at 5 seconds (i.e., `'5000'`).
  // Value of `'0'` or omission results in the default time-to-live value being applied.
  // If the caller requests multiple successive cancellations for a given order, such that the time-to-live windows overlap, only the first request will be considered.
  //
  time_to_live_ms?: string
}

export interface IApiCancelOrderResponse {
  // The cancelled order
  result?: IOrder
}

// Kline/Candlestick bars for an instrument. Klines are uniquely identified by their instrument, type, interval, and open time.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiCandlestickRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The interval of each candlestick
  interval?: ECandlestickInterval
  // The type of candlestick data to retrieve
  type?: ECandlestickType
  // Start time of kline data in unix nanoseconds
  start_time?: string
  // End time of kline data in unix nanoseconds
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiCandlestickResponse {
  // The candlestick result set for given interval
  result?: ICandlestick[]
  // The cursor to indicate when to start the next query from
  next?: string
}

export interface IApiCategoryAffinityScoreRequest {
  // The start time of query. Can leave empty to query from the beginning
  start_time?: string
  // The end time of query. Can leave empty to query until now
  end_time?: string
}

export interface IApiCategoryAffinityScoreResponse {
  // The list of categoryAffinities score
  result?: IUserCategoryAffinityScore[]
}

// Create multiple orders simultaneously for this trading account.
//
// This endpoint supports the following order scenarios:
// - One-Cancels-Other (OCO) orders combining TP/SL
// - One-Sends-Other (OSO) orders
//
// Usage:
// - For OCO (TP/SL pair): Send exactly 2 orders in the same request - one Take Profit and one Stop Loss order
// - For OSO: Send exactly one main order and one contingent order (TP and/or SL)
export interface IApiCreateBulkOrdersRequest {
  // The orders to create
  orders?: IOrder[]
}

export interface IApiCreateBulkOrdersResponse {
  // The created orders in same order as requested
  result?: IOrder[]
}

// Create an order on the orderbook for this trading account.
export interface IApiCreateOrderRequest {
  // The order to create
  order?: IOrder
}

export interface IApiCreateOrderResponse {
  // The created order
  result?: IOrder
}

// Remove dust position (i.e., order quantity smaller than minimum required increment) on an account, by matching the specified order against GRVT directly. Limit price should always be better than mark price.
export interface IApiDedustPositionRequest {
  // The order to create
  order?: IOrder
}

export interface IApiDedustPositionResponse {
  // The created order
  result?: IOrder
}

// The request to get the historical deposits of an account
// The history is returned in reverse chronological order
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiDepositHistoryRequest {
  // The token currency to query for, if nil or empty, return all deposits. Otherwise, only entries matching the filter will be returned
  currency?: ECurrency[]
  // The start time to query for in unix nanoseconds
  start_time?: string
  // The end time to query for in unix nanoseconds
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the next query from
  cursor?: string
  // Main account ID being queried. By default, applies the requestor's main account ID.
  main_account_id?: string
}

export interface IApiDepositHistoryResponse {
  // The deposit history matching the request account
  result?: IDepositHistory[]
  // The cursor to indicate when to start the next query from
  next?: string
}

export interface IApiDropClientWsRequest {
  main_account_id?: string
}

export interface IApiDropClientWsResponse {
  num_dropped?: number
}

// Query for all historical fills made by a single account. A single order can be matched multiple times, hence there is no real way to uniquely identify a trade.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiFillHistoryRequest {
  // The sub account ID to request for
  sub_account_id?: string
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be returned
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // The start time to apply in unix nanoseconds. If nil, this defaults to all start times. Otherwise, only entries matching the filter will be returned
  start_time?: string
  // The end time to apply in unix nanoseconds. If nil, this defaults to all end times. Otherwise, only entries matching the filter will be returned
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiFillHistoryResponse {
  // The private trades matching the request asset
  result?: IFill[]
  // The cursor to indicate when to start the query from
  next?: string
}

export interface IApiFindEcosystemEpochMetricResponse {
  // The epoch metric
  metric?: IEcosystemMetric
  // The rank of the account in the ecosystem
  rank?: number
  // The total number of accounts in the ecosystem
  total?: number
  // The time when the ecosystem points were last calculated
  last_calculated_at?: string
  // Direct invite count without relying on epochs
  total_direct_invite_count?: number
  // Indirect invite count without relying on epochs
  total_indirect_invite_count?: number
}

export interface IApiFindEcosystemLeaderboardResponse {
  // The list of ecosystem leaderboard users
  users?: IEcosystemLeaderboardUser[]
}

export interface IApiFindFirstEpochMetricResponse {
  // Phase zero metric
  phase_zero_metric?: IEcosystemMetric
  // Phase one metric
  phase_one_metric?: IEcosystemMetric
  // The rank of the account in the ecosystem
  rank?: number
  // The total number of accounts in the ecosystem
  total?: number
  // Total ecosystem point of the first epoch
  total_point?: string
  // The time when the ecosystem points were last calculated
  last_calculated_at?: string
}

export interface IApiFindTraderEpochMetricResponse {
  // Phase zero metric
  metric?: ITraderMetric
  // The rank of the account in the trader
  rank?: number
  // The total number of accounts in the trader
  total?: number
  // The time when the trader points were last calculated
  last_calculated_at?: string
}

export interface IApiFindTraderLeaderboardResponse {
  // The list of trader leaderboard users
  users?: ITraderLeaderboardUser[]
}

// The funding account summary, that reports the total equity and spot balances of a funding (main) account
export interface IApiFundingAccountSummaryResponse {
  // The funding account summary
  result?: IFundingAccountSummary
}

// Query for all historical funding payments made by a single account.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiFundingPaymentHistoryRequest {
  // The sub account ID to request for
  sub_account_id?: string
  // The perpetual instrument to filter for
  instrument?: string
  // The start time to apply in unix nanoseconds. If nil, this defaults to all start times. Otherwise, only entries matching the filter will be returned
  start_time?: string
  // The end time to apply in unix nanoseconds. If nil, this defaults to all end times. Otherwise, only entries matching the filter will be returned
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiFundingPaymentHistoryResponse {
  // The funding payments matching the request asset
  result?: IFundingPayment[]
  // The cursor to indicate when to start the query from
  next?: string
}

// Lookup the historical funding rate of a perpetual future.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiFundingRateRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // Start time of funding rate in unix nanoseconds
  start_time?: string
  // End time of funding rate in unix nanoseconds
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiFundingRateResponse {
  // The funding rate result set for given interval
  result?: IFundingRate[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// The request to get the initial leverage of a sub account
export interface IApiGetAllInitialLeverageRequest {
  // The sub account ID to get the leverage for
  sub_account_id?: string
}

// The response to get the initial leverage of a sub account
export interface IApiGetAllInitialLeverageResponse {
  // The initial leverage of the sub account
  results?: IInitialLeverageResult[]
}

// Fetch all instruments
export interface IApiGetAllInstrumentsRequest {
  // Fetch only active instruments
  is_active?: boolean
}

export interface IApiGetAllInstrumentsResponse {
  // List of instruments
  result?: IInstrument[]
}

export interface IApiGetEcosystemLeaderboardRequest {
  // Start time of the epoch - phase
  calculate_from?: string
  // The number of accounts to return
  limit?: number
}

export interface IApiGetEcosystemLeaderboardResponse {
  // The list of ecosystem points
  points?: IEcosystemPoint[]
}

export interface IApiGetEcosystemReferralStatResponse {
  // Direct invite count
  direct_invite_count?: number
  // Indirect invite count
  indirect_invite_count?: number
  // Total volume traded by direct invites multiple by 1e9
  direct_invite_trading_volume?: string
  // Total volume traded by indirect invites multiple by 1e9
  indirect_invite_trading_volume?: string
}

// Fetch a list of instruments based on the filters provided
export interface IApiGetFilteredInstrumentsRequest {
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be returned
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // Request for active instruments only
  is_active?: boolean
  // The limit to query for. Defaults to 500; Max 100000
  limit?: number
}

export interface IApiGetFilteredInstrumentsResponse {
  // The instruments matching the request filter
  result?: IInstrument[]
}

// Fetch a single instrument by supplying the asset or instrument name
export interface IApiGetInstrumentRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
}

export interface IApiGetInstrumentResponse {
  // The instrument matching the request asset
  result?: IInstrument
}

export interface IApiGetLPInfoRequest {
  // The kind filter to apply
  kind?: EKind
  // The base filter to apply
  base?: ECurrency
}

export interface IApiGetLPInfoResponse {
  // Is LP maker
  is_lp_maker?: boolean
  // The spread score value multiplier
  spread_score_value_multiplier?: string
  // The depth score value multiplier
  depth_score_value_multiplier?: string
  // The market share value multiplier
  market_share_value_multiplier?: string
  // Underlying multiplier
  underlying_multiplier?: string
  // The market share multiplier, equal to the maker trading volume in the past 2 hours
  market_share_multiplier?: string
  // Ask fast market multiplier
  ask_fast_market_multiplier?: number
  // Bid fast market multiplier
  bid_fast_market_multiplier?: number
}

export interface IApiGetLPLeaderboardRequest {
  // The epoch to filter
  epoch?: number
  // The number of accounts to return
  limit?: number
  // The kind filter to apply
  kind?: EKind
  // The base filter to apply
  base?: ECurrency
}

export interface IApiGetLPLeaderboardResponse {
  // The list of LP points
  points?: IApproximateLPPoint[]
}

export interface IApiGetLPPointRequest {
  // The epoch to filter
  epoch?: number
  // Optional. The kind filter to apply
  kind?: EKind
  // Optional. The base filter to apply
  base?: ECurrency
}

export interface IApiGetLPPointResponse {
  // LP points of user
  point?: ILPPoint
  // The number of maker
  maker_count?: number
}

export interface IApiGetLatestLPSnapshotRequest {
  // The kind filter to apply
  kind?: EKind
  // The base filter to apply
  base?: ECurrency
}

export interface IApiGetLatestLPSnapshotResponse {
  // The latest LP snapshot
  snapshot?: IApproximateLPSnapshot
}

export interface IApiGetListEpochBadgeResponse {
  // The list of epoch badges
  result?: IEpochBadge[]
}

// startTime and endTime are optional parameters. The semantics of these parameters are as follows:<ul>
export interface IApiGetListFlatReferralRequest {
  // The off chain referrer account id to get all flat referrals
  referral_id?: string
  // Optional. Start time in unix nanoseconds
  start_time?: string
  // Optional. End time in unix nanoseconds
  end_time?: string
  // The off chain account id to get all user's referrers
  account_id?: string
}

export interface IApiGetListFlatReferralResponse {
  // The list of flat referrals
  flat_referrals?: IFlatReferral[]
}

export interface IApiGetListRewardEpochResponse {
  // The list of epoch for ecosystem reward
  ecosystem_epochs?: IRewardEpochInfo[]
  // The list of epoch for trader reward and lp reward
  trading_epochs?: IRewardEpochInfo[]
}

export interface IApiGetMarginTiersResponse {
  results?: IAssetMarginTierResponse[]
}

// Retrieves the grouping of non-cancelled, non-filled client orders for a given subaccount when the grouping exist.
//
// helping to identify TP/SL pairs or other order relationships within the account.
export interface IApiGetOrderGroupRequest {
  // The subaccount ID for which the order groups should be retrieved.
  sub_account_id?: string
}

export interface IApiGetOrderGroupResponse {
  // A list of client orders grouped by their associated order group.
  // Each entry in the list contains a `groupID` and the corresponding `clientOrderID`s
  // that belong to that group.
  result?: IClientOrderIDsByGroup[]
}

// Retrieve the order for the account. Either `order_id` or `client_order_id` must be provided.
export interface IApiGetOrderRequest {
  // The subaccount ID to filter by
  sub_account_id?: string
  // Filter for `order_id`
  order_id?: string
  // Filter for `client_order_id`
  client_order_id?: string
}

export interface IApiGetOrderResponse {
  // The order object for the requested filter
  result?: IOrder
}

export interface IApiGetTraderStatResponse {
  // Total fee paid
  total_fee?: string
}

export interface IApiGetUserEcosystemPointRequest {
  // The off chain account id
  account_id?: string
  // Start time of the epoch - phase
  calculate_from?: string
  // Include user rank in the response
  include_user_rank?: boolean
}

export interface IApiGetUserEcosystemPointResponse {
  // The list of ecosystem points
  points?: IEcosystemPoint[]
}

export interface IApiGetVerifiedEcosystemLeaderboardRequest {
  // Start time of the epoch
  calculate_from?: string
  // Completed KYC before this time
  completed_kyc_before?: string
}

// The request to get the latest snapshot of list sub account
//
export interface IApiLatestSnapSubAccountsRequest {
  // The list of sub account ids to query
  sub_account_i_ds?: string[]
}

export interface IApiLatestSnapSubAccountsResponse {
  // The sub account history matching the request sub account
  result?: ISubAccount[]
}

export interface IApiListAggregatedAccountSummaryRequest {
  // The list of main account ID to request for
  main_account_ids?: string[]
}

export interface IApiListAggregatedAccountSummaryResponse {
  // The list of aggregated account summaries of requested main accounts
  account_summaries?: IApiAggregatedAccountSummaryResponse[]
}

// Retrieves a single mini ticker value for a single instrument. Please do not use this to repeatedly poll for data -- a websocket subscription is much more performant, and useful.
export interface IApiMiniTickerRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
}

export interface IApiMiniTickerResponse {
  // The mini ticker matching the request asset
  result?: IMiniTicker
}

export interface IApiOpenOrdersRequest {
  // The subaccount ID to filter by
  sub_account_id?: string
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be returned
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
}

// Retrieves all open orders for the account. This may not match new orders in flight.
export interface IApiOpenOrdersResponse {
  // The Open Orders matching the request filter
  result?: IOrder[]
}

// Retrieves the order history for the account.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiOrderHistoryRequest {
  // The subaccount ID to filter by
  sub_account_id?: string
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be returned
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // The start time to apply in nanoseconds. If nil, this defaults to all start times. Otherwise, only entries matching the filter will be returned
  start_time?: string
  // The end time to apply in nanoseconds. If nil, this defaults to all end times. Otherwise, only entries matching the filter will be returned
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiOrderHistoryResponse {
  // The Open Orders matching the request filter
  result?: IOrder[]
  // The cursor to indicate when to start the query from
  next?: string
}

// Retrieve the order state for the account. Either `order_id` or `client_order_id` must be provided.
export interface IApiOrderStateRequest {
  // The subaccount ID to filter by
  sub_account_id?: string
  // Filter for `order_id`
  order_id?: string
  // Filter for `client_order_id`
  client_order_id?: string
}

export interface IApiOrderStateResponse {
  // The order state for the requested filter
  state?: IOrderState
}

// Retrieves aggregated price depth for a single instrument, with a maximum depth of 10 levels. Do not use this to poll for data -- a websocket subscription is much more performant, and useful.
export interface IApiOrderbookLevelsRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // Depth of the order book to be retrieved (10, 50, 100, 500)
  depth?: number
}

export interface IApiOrderbookLevelsResponse {
  // The orderbook levels objects matching the request asset
  result?: IOrderbookLevels
}

// Query the positions of a sub account
export interface IApiPositionsRequest {
  // The sub account ID to request for
  sub_account_id?: string
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be returned
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
}

export interface IApiPositionsResponse {
  // The positions matching the request filter
  result?: IPositions[]
}

// UI only for bridge deposits through non native bridge. Currently only supports XY Finance bridge account.
export interface IApiPreDepositCheckRequest {
  // The currency you hold the deposit in
  currency?: ECurrency
  // The bridge type to conduct checks for
  bridge?: EBridgeType
}

export interface IApiPreDepositCheckResponse {
  // Max Deposit Limit reported for the Bridge Account reported in the currency balance
  max_deposit_limit?: string
  // The currency you hold the deposit in
  currency?: ECurrency
}

// Get pre-order check information for a new order
export interface IApiPreOrderCheckRequest {
  // The subaccount ID of orders to query
  sub_account_id?: string
  // The order to do pre-order check
  orders?: IOrder[]
}

export interface IApiPreOrderCheckResponse {
  // Pre order check for each new order in the request
  results?: IPreOrderCheckResult[]
}

// Request to retrieve the account summary for a given account
export interface IApiQueryAccountSummaryRequest {
  // The time interval to filter
  time_interval?: ETimeInterval
}

// Response to retrieve the sub-account summary for a given sub-account
export interface IApiQueryAccountSummaryResponse {
  // The list of account summaries
  result?: ISnapAccountSummary[]
  // The next cursor to fetch the next page of results
  next?: string
}

// Query flat referral stats
export interface IApiQueryFlatReferralStatRequest {
  // The off chain account id to get referral stats
  account_id?: string
}

export interface IApiQueryFlatReferralStatResponse {
  // Direct invite count
  direct_invite_count?: number
  // Indirect invite count
  indirect_invite_count?: number
}

// Request to retrieve the funding account summary for a given main account
export interface IApiQueryListFundingAccountSummaryRequest {
  // The time interval to filter by
  time_interval?: ETimeInterval
}

// Response to retrieve the funding account summary for a given main account
export interface IApiQueryListFundingAccountSummaryResponse {
  // The list of funding account summaries
  result?: ISnapFundingAccountSummary[]
  // The next cursor to fetch the next page of results
  next?: string
}

// Request to retrieve the sub-account summary for a given sub-account
export interface IApiQueryListSubAccountSummaryRequest {
  // The time interval to filter
  time_interval?: ETimeInterval
  // The subaccount ID to filter by
  sub_account_id?: string
}

// Response to retrieve the sub-account summary for a given sub-account
export interface IApiQueryListSubAccountSummaryResponse {
  // The list of sub-account summaries
  result?: ISnapSubAccountSummary[]
  // The next cursor to fetch the next page of results
  next?: string
}

// Request to retrieve the trading volume
export interface IApiQueryTradingPerformanceRequest {
  // Optional: The subaccount ID to filter by
  sub_account_id?: string
  // The asset to filter by
  asset?: string
}

// Response to retrieve the trading volume
export interface IApiQueryTradingPerformanceResponse {
  // Trading volume in USDT
  trading_volume?: string
  // Realized PnL in USDT
  realized_pnl?: string
}

// Request to retrieve the trading performance trend
export interface IApiQueryTradingPerformanceTrendRequest {
  // Optional: The subaccount ID to filter by
  sub_account_id?: string
  // The time interval to filter by
  time_interval?: ETimeInterval
}

// Response to retrieve the trading performance trend
export interface IApiQueryTradingPerformanceTrendResponse {
  // The list of trading performance trends
  result?: IApiTradingPerformanceTrend[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// Replace multiple orders simultaneously for this trading account.
//
// This endpoint supports the following order scenarios:
// - Replace a TP and/or SL attached to a positionUsage:
// - subAccountID: The subaccount ID of the user creating the Request
// - clientOrderIDs: List of client order IDs to replace
// - orderIDs: List of order IDs to replace
// - newOrders: List of new orders to replace the old orders(Note: either provide clientOrderIDs or orderIDs, if provided both, clientOrderIDs will be used)
export interface IApiReplaceOrdersRequest {
  // The subaccount ID of the user creating the Request
  sub_account_id?: string
  // The client order IDs of the orders to replace
  client_order_i_ds?: string[]
  // The order IDs of the orders to replace
  order_i_ds?: string[]
  // The new orders to replace the old orders
  new_orders?: IOrder[]
}

export interface IApiReplaceOrdersResponse {
  // The new orders in same order as requested
  result?: IOrder[]
}

export interface IApiResolveEpochEcosystemMetricResponse {
  // The name of the epoch
  epoch_name?: string
  // Ecosystem points up to the most recently calculated time within this epoch
  point?: number
  // The time in unix nanoseconds when the ecosystem points were last calculated
  last_calculated_time?: string
}

// The request to set the initial leverage of a sub account
export interface IApiSetInitialLeverageRequest {
  // The sub account ID to set the leverage for
  sub_account_id?: string
  // The instrument to set the leverage for
  instrument?: string
  // The leverage to set for the sub account
  leverage?: string
}

// The response to set the initial leverage of a sub account
export interface IApiSetInitialLeverageResponse {
  // Whether the leverage was set successfully
  success?: boolean
}

// Lookup the historical settlement price of various pairs.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiSettlementPriceRequest {
  // The base currency to select
  base?: ECurrency
  // The quote currency to select
  quote?: ECurrency
  // Start time of settlement price in unix nanoseconds
  start_time?: string
  // End time of settlement price in unix nanoseconds
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiSettlementPriceResponse {
  // The funding rate result set for given interval
  result?: IAPISettlementPrice[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// The socialized loss status.
export interface IApiSocializedLossStatusResponse {
  // Whether the socialized loss is active
  is_active?: boolean
  // The socialized loss haircut ratio in centi-beeps
  haircut_ratio?: string
}

// The request to get the history of a sub account
// SubAccount Summary values are snapshotted once every hour
// No snapshots are taken if the sub account has no activity in the hourly window
// History is preserved only for the last 30 days
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiSubAccountHistoryRequest {
  // The sub account ID to request for
  sub_account_id?: string
  // Start time of sub account history in unix nanoseconds
  start_time?: string
  // End time of sub account history in unix nanoseconds
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the next query from
  cursor?: string
}

export interface IApiSubAccountHistoryResponse {
  // The sub account history matching the request sub account
  result?: ISubAccount[]
  // The cursor to indicate when to start the next query from
  next?: string
}

export interface IApiSubAccountSummaryRequest {
  // The subaccount ID to filter by
  sub_account_id?: string
}

// Query for sub-account details, including base currency balance, all derivative positions, margin levels, and P&L.
export interface IApiSubAccountSummaryResponse {
  // The sub account matching the request sub account
  result?: ISubAccount
}

// startTime are optional parameters. The semantics of these parameters are as follows:<ul>
export interface IApiSubAccountTradeAggregationRequest {
  // Optional. The limit of the number of results to return
  limit?: number
  // The interval of each sub account trade
  interval?: ESubAccountTradeInterval
  // The list of sub account ids to query
  sub_account_i_ds?: string[]
  // Optional. The starting time in unix nanoseconds of a specific interval to query
  start_interval?: string
  // Optional. Start time in unix nanoseconds
  start_time?: string
  // Optional. End time in unix nanoseconds
  end_time?: string
  // Filter on the maker of the trade
  is_maker?: boolean
  // Filter on the taker of the trade
  is_taker?: boolean
  // The cursor to indicate when to start the next query from
  cursor?: string
  // Whether to group trades by signer per sub account
  group_by_signer?: boolean
}

export interface IApiSubAccountTradeAggregationResponse {
  // The sub account trade aggregation result set for given interval
  result?: ISubAccountTradeAggregation[]
  // The cursor to indicate when to start the next query from
  next?: string
}

export interface IApiTickerFeedDataV1 {
  // The mini ticker matching the request asset
  result?: ITicker
}

// Retrieves a single ticker value for a single instrument. Please do not use this to repeatedly poll for data -- a websocket subscription is much more performant, and useful.
export interface IApiTickerRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
}

export interface IApiTickerResponse {
  // The mini ticker matching the request asset
  result?: ITicker
}

// Returns the list of assets traded by users.
export interface IApiTimedAssetExposureRequest {
  // Whether the exposure is gross or net
  is_gross_exposure?: boolean
  // The time interval to filter
  time_interval?: ETimeInterval
  // Optional: The subaccount ID to filter by
  sub_account_id?: string
}

// Returns the list of assets traded by users.
export interface IApiTimedAssetExposureResponse {
  // The list of assets traded by the user, ranked in descending order based on gross/net exposure
  result?: ITimedAssetExposureSummary[]
  // The next cursor to fetch the next page of results
  next?: string
}

// Perform historical lookup of public trades in any given instrument.
// This endpoint offers public trading data, use the Trading APIs instead to query for your personalized trade tape.
// Only data from the last three months will be retained.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiTradeHistoryRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The start time to apply in nanoseconds. If nil, this defaults to all start times. Otherwise, only entries matching the filter will be returned
  start_time?: string
  // The end time to apply in nanoseconds. If nil, this defaults to all end times. Otherwise, only entries matching the filter will be returned
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiTradeHistoryResponse {
  // The public trades matching the request asset
  result?: ITrade[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// Retrieves up to 1000 of the most recent trades in any given instrument. Do not use this to poll for data -- a websocket subscription is much more performant, and useful.
// This endpoint offers public trading data, use the Trading APIs instead to query for your personalized trade tape.
export interface IApiTradeRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
}

export interface IApiTradeResponse {
  // The public trades matching the request asset
  result?: ITrade[]
}

// Trading performance trend returned by the service
export interface IApiTradingPerformanceTrend {
  // The start time of the interval
  start_interval?: string
  // The end time of the interval
  end_interval?: string
  // The trading volume of the account
  trading_volume?: string
  // Realized PnL in USDT
  realized_pnl?: string
}

export interface IApiTransferAck {
  // Gravity has acknowledged that the transfer has been successfully processed. If true, a `tx_id` will be returned. If false, an error will be returned.
  ack?: boolean
  // The transaction ID of the transfer. This is only returned if the transfer is successful.
  tx_id?: string
}

// The request to get the historical transfers of an account
// The history is returned in reverse chronological order
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiTransferHistoryRequest {
  // The token currency to query for, if nil or empty, return all transfers. Otherwise, only entries matching the filter will be returned
  currency?: ECurrency[]
  // The start time to query for in unix nanoseconds
  start_time?: string
  // The end time to query for in unix nanoseconds
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the next query from
  cursor?: string
  // The transaction ID to query for
  tx_id?: string
  // Main account ID being queried. By default, applies the requestor's main account ID.
  main_account_id?: string
}

export interface IApiTransferHistoryResponse {
  // The transfer history matching the request account
  result?: ITransferHistory[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// This API allows you to transfer funds in multiple different ways<ul>
// <li>Between SubAccounts within your Main Account</li>
// <li>Between your MainAccount and your SubAccounts</li>
// <li>To other MainAccounts that you have previously allowlisted</li>
// </ul><b>Fast Withdrawal Funding Address</b>
// For fast withdrawals, funds must be sent to the designated funding account address. Please ensure you use the correct address based on the environment:
// <b>Production Environment Address:</b>
// <em>[To be updated, not ready yet]</em>
// This address should be specified as the <code>to_account_id</code> in your API requests for transferring funds using the transfer API. Ensure accurate input to avoid loss of funds or use the UI.
//
export interface IApiTransferRequest {
  // The main account to transfer from
  from_account_id?: string
  // The subaccount to transfer from (0 if transferring from main account)
  from_sub_account_id?: string
  // The main account to deposit into
  to_account_id?: string
  // The subaccount to transfer to (0 if transferring to main account)
  to_sub_account_id?: string
  // The token currency to transfer
  currency?: ECurrency
  // The number of tokens to transfer, quoted in tokenCurrency decimal units
  num_tokens?: string
  // The signature of the transfer
  signature?: ISignature
  // The type of transfer
  transfer_type?: ETransferType
  // The metadata of the transfer
  transfer_metadata?: string
}

// Used to acknowledge a transfer request outcome
export interface IApiTransferResponse {
  // The Transfer response object
  result?: IApiTransferAck
}

export interface IApiUserCategoryAffinityScoreRequest {
  // The off chain account id
  account_id?: string
  // The start time of query. Can leave empty to query from the beginning
  start_time?: string
  // The end time of query. Can leave empty to query until now
  end_time?: string
}

export interface IApiUserCategoryAffinityScoreResponse {
  // The list of categoryAffinities score
  result?: IUserCategoryAffinityScore[]
}

// The request to get the historical withdrawals of an account
// The history is returned in reverse chronological order
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiWithdrawalHistoryRequest {
  // The token currency to query for, if nil or empty, return all withdrawals. Otherwise, only entries matching the filter will be returned
  currency?: ECurrency[]
  // The start time to query for in unix nanoseconds
  start_time?: string
  // The end time to query for in unix nanoseconds
  end_time?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the next query from
  cursor?: string
  // Main account ID being queried. By default, applies the requestor's main account ID.
  main_account_id?: string
}

export interface IApiWithdrawalHistoryResponse {
  // The withdrawals history matching the request account
  result?: IWithdrawalHistory[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// Leverage this API to initialize a withdrawal from GRVT's Hyperchain onto Ethereum.
// Do take note that the bridging process does take time. The GRVT UI will help you keep track of bridging progress, and notify you once its complete.
//
// If not withdrawing the entirety of your balance, there is a minimum withdrawal amount. Currently that amount is ~25 USDT.
// Withdrawal fees also apply to cover the cost of the Ethereum transaction.
// Note that your funds will always remain in self-custory throughout the withdrawal process. At no stage does GRVT gain control over your funds.
export interface IApiWithdrawalRequest {
  // The main account to withdraw from
  from_account_id?: string
  // The Ethereum wallet to withdraw into
  to_eth_address?: string
  // The token currency to withdraw
  currency?: ECurrency
  // The number of tokens to withdraw, quoted in tokenCurrency decimal units
  num_tokens?: string
  // The signature of the withdrawal
  signature?: ISignature
}

export interface IApproximateLPPoint {
  // The off chain account id
  off_chain_account_id?: string
  // Liquidity score
  liquidity_score?: string
  // The rank of user in the LP leaderboard
  rank?: number
}

export interface IApproximateLPSnapshot {
  // The main account id
  main_account_id?: string
  // Underlying multiplier
  underlying_multiplier?: string
  // Market share multiplier
  market_share_multiplier?: string
  // Fast market multiplier
  bid_fast_market_multiplier?: number
  // Fast market multiplier
  ask_fast_market_multiplier?: number
  // Liquidity score
  liquidity_score?: string
  // The time when the snapshot was calculated
  calculate_at?: string
}

// The gross/net exposure of a asset.
export interface IAssetExposureSummary {
  // The asset
  instruments?: string
  // The gross/net notional of the asset
  notional?: string
}

export interface IAssetMarginTierResponse {
  asset?: string
  tiers?: IMarginTierResponse[]
}

export interface IAssetMaxQty {
  // The asset associated with the max quantity
  asset?: string
  // The maximum buy quantity
  max_buy_qty?: string
  // The maximum sell quantity
  max_sell_qty?: string
}

export interface ICancelStatusFeed {
  // The subaccount ID that requested the cancellation
  sub_account_id?: string
  // A unique identifier for the active order within a subaccount, specified by the client
  client_order_id?: string
  // A unique 128-bit identifier for the order, deterministically generated within the GRVT backend
  order_id?: string
  // The user-provided reason for cancelling the order
  reason?: EOrderRejectReason
  // [Filled by GRVT Backend] Time at which the cancellation status was updated by GRVT in unix nanoseconds
  update_time?: string
  // Status of the cancellation attempt
  cancel_status?: ECancelStatus
}

export interface ICandlestick {
  // Open time of kline bar in unix nanoseconds
  open_time?: string
  // Close time of kline bar in unix nanosecond
  close_time?: string
  // The open price, expressed in underlying currency resolution units
  open?: string
  // The close price, expressed in underlying currency resolution units
  close?: string
  // The high price, expressed in underlying currency resolution units
  high?: string
  // The low price, expressed in underlying currency resolution units
  low?: string
  // The underlying volume transacted, expressed in base asset decimal units
  volume_b?: string
  // The quote volume transacted, expressed in quote asset decimal units
  volume_q?: string
  // The number of trades transacted
  trades?: number
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
}

export interface IClaimEcosystemBadgeResponse {
  // The epoch badge
  badge?: IEpochBadge
}

// Grouping for the client order id and their associated groups.
//
// This is used to define TP/SL pairs or other order groupings after loading the list of Open Orders.
export interface IClientOrderIDsByGroup {
  // The group this order belongs to. It can be used to define TP/SL pairs or other order groupings
  group_id?: string
  // List of client order IDs in the group
  client_order_id?: string[]
  // The sub account ID that these orders belong to
  sub_account_id?: string
}

export interface IDeposit {
  // The hash of the bridgemint event producing the deposit
  tx_hash?: string
  // The account to deposit into
  to_account_id?: string
  // The token currency to deposit
  currency?: ECurrency
  // The number of tokens to deposit
  num_tokens?: string
}

export interface IDepositHistory {
  // The L1 txHash of the deposit
  l_1_hash?: string
  // The L2 txHash of the deposit
  l_2_hash?: string
  // The account to deposit into
  to_account_id?: string
  // The token currency to deposit
  currency?: ECurrency
  // The number of tokens to deposit
  num_tokens?: string
  // The timestamp when the deposit was initiated on L1 in unix nanoseconds
  initiated_time?: string
  // The timestamp when the deposit was confirmed on L2 in unix nanoseconds
  confirmed_time?: string
  // The address of the sender
  from_address?: string
}

export interface IEcosystemLeaderboardUser {
  // The off chain account id
  account_id?: string
  // The rank of the account in the ecosystem
  rank?: number
  // Total ecosystem point
  total_point?: string
  // The twitter username of the account
  twitter_username?: string
}

export interface IEcosystemMetric {
  // Direct invite count
  direct_invite_count?: number
  // Indirect invite count
  indirect_invite_count?: number
  // Direct invite trading volume
  direct_invite_trading_volume?: string
  // Indirect invite trading volume
  indirect_invite_trading_volume?: string
  // Total ecosystem point of this epoch/phase
  total_point?: string
}

export interface IEcosystemPoint {
  // The off chain account id
  account_id?: string
  // The main account id
  main_account_id?: string
  // Total ecosystem point
  total_point?: string
  // Direct invite count
  direct_invite_count?: number
  // Indirect invite count
  indirect_invite_count?: number
  // Direct invite trading volume
  direct_invite_trading_volume?: string
  // Indirect invite trading volume
  indirect_invite_trading_volume?: string
  // The time when the ecosystem point is calculated
  calculate_at?: string
  // Start time of the epoch - phase
  calculate_from?: string
  // End time of the epoch - phase
  calculate_to?: string
  // The rank of the account in the ecosystem
  rank?: number
  // The epoch number of the ecosystem point
  epoch?: number
  // Brokered trading volume
  brokered_trading_volume?: string
  // Brokered trading point
  brokered_trading_point?: string
  // Referee KYC point
  referee_kyc_point?: string
  // Referrer KYC point
  referrer_kyc_point?: string
}

export interface IEpoch {
  // The epoch number
  epoch?: number
  // The start time of the epoch
  start_time?: string
  // The end time of the epoch
  end_time?: string
}

export interface IEpochBadge {
  // The off chain account id
  account_id?: string
  // The account ID
  main_account_id?: string
  // The type of the reward program
  type?: ERewardProgramType
  // The epoch number
  epoch?: number
  // The start time of the epoch
  epoch_start_time?: string
  // The end time of the epoch
  epoch_end_time?: string
  // The type of the badge
  badge?: EEpochBadgeType
  // The distributed badges
  distributed_badges?: EEpochBadgeType[]
  // Total point
  total_point?: string
  // Rank
  rank?: number
  // The time when the badge was claimed, or the epoch end time if the user has already completed the KYC process
  claimed_at?: string
}

export interface IEpochBadgePointDistribution {
  // The type of the badge
  badge?: EEpochBadgeType
  // The epoch number
  epoch?: number
  // The type of the reward program
  type?: ERewardProgramType
  // The minimum point to get the badge
  min_point?: string
  // The maximum point to get the badge
  max_point?: string
  // The minimum rank to get the badge
  min_rank?: number
  // The maximum rank to get the badge
  max_rank?: number
  // The total point to get the badge
  total_point?: string
  // The number of users to get the badge
  count?: number
}

// An error response
export interface IError {
  // The error code for the request
  code?: number
  // The error message for the request
  message?: string
}

export interface IFill {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: string
  // The sub account ID that participated in the trade
  sub_account_id?: string
  // The instrument being represented
  instrument?: string
  // The side that the subaccount took on the trade
  is_buyer?: boolean
  // The role that the subaccount took on the trade
  is_taker?: boolean
  // The number of assets being traded, expressed in base asset decimal units
  size?: string
  // The traded price, expressed in `9` decimals
  price?: string
  // The mark price of the instrument at point of trade, expressed in `9` decimals
  mark_price?: string
  // The index price of the instrument at point of trade, expressed in `9` decimals
  index_price?: string
  // The interest rate of the underlying at point of trade, expressed in centibeeps (1/100th of a basis point)
  interest_rate?: string
  // [Options] The forward price of the option at point of trade, expressed in `9` decimals
  forward_price?: string
  // The realized PnL of the trade, expressed in quote asset decimal units (0 if increasing position size)
  realized_pnl?: string
  // The fees paid on the trade, expressed in quote asset decimal unit (negative if maker rebate applied)
  fee?: string
  // The fee rate paid on the trade
  fee_rate?: string
  // A trade identifier, globally unique, and monotonically increasing (not by `1`).
  // All trades sharing a single taker execution share the same first component (before `-`), and `event_time`.
  // `trade_id` is guaranteed to be consistent across MarketData `Trade` and Trading `Fill`.
  trade_id?: string
  // An order identifier
  order_id?: string
  // The venue where the trade occurred
  venue?: EVenue
  // If the trade was a liquidation
  is_liquidation?: boolean
  // A unique identifier for the active order within a subaccount, specified by the client
  // This is used to identify the order in the client's system
  // This field can be used for order amendment/cancellation, but has no bearing on the smart contract layer
  // This field will not be propagated to the smart contract, and should not be signed by the client
  // This value must be unique for all active orders in a subaccount, or amendment/cancellation will not work as expected
  // Gravity UI will generate a random clientOrderID for each order in the range [0, 2^63 - 1]
  // To prevent any conflicts, client machines should generate a random clientOrderID in the range [2^63, 2^64 - 1]
  //
  // When GRVT Backend receives an order with an overlapping clientOrderID, we will reject the order with rejectReason set to overlappingClientOrderId
  client_order_id?: string
  // A trade index
  trade_index?: number
  // The address (public key) of the wallet signing the payload
  signer?: string
  // Specifies the broker who brokered the order
  broker?: EBrokerTag
  // If the trade is a RPI trade
  is_rpi?: boolean
  // Specifies the source of the viewing party of the trade
  source?: ESource
}

export interface IFlatReferral {
  // The off chain account id
  account_id?: string
  // The off chain referrer account id
  referrer_id?: string
  // The referrer level; 1: direct referrer, 2: indirect referrer
  referrer_level?: number
  // The account creation time
  account_create_time?: string
  // The main account id
  main_account_id?: string
  // The referrer main account id
  referrer_main_account_id?: string
  // The account is a business account or not
  is_business?: boolean
  // The account is KYC verified or not
  is_kyc_completed?: boolean
  // The KYC completed time
  kyc_completed_at?: string
  // The KYC type, can be 'individual' or 'business'
  kyc_type?: string
  // The first KYC completed time
  kyc_first_completed_at?: string
}

// The funding account summary, that reports the total equity and spot balances of a funding (main) account
export interface IFundingAccountSummary {
  // The main account ID of the account to which the summary belongs
  main_account_id?: string
  // Total equity of the main account, denominated in USD
  total_equity?: string
  // The list of spot assets owned by this main account, and their balances
  spot_balances?: ISpotBalance[]
}

export interface IFundingPayment {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: string
  // The sub account ID that made the funding payment
  sub_account_id?: string
  // The perpetual instrument being funded
  instrument?: string
  // The currency of the funding payment
  currency?: ECurrency
  // The amount of the funding payment. Positive if paid, negative if received
  amount?: string
  // The transaction ID of the funding payment.
  // Funding payments can be triggered by a trade, transfer, or liquidation.
  // The `tx_id` will match the corresponding `trade_id` or `tx_id`.
  tx_id?: string
}

export interface IFundingRate {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The funding rate of the instrument, expressed in percentage points
  funding_rate?: string
  // The funding timestamp of the funding rate, expressed in unix nanoseconds
  funding_time?: string
  // The mark price of the instrument at funding timestamp, expressed in `9` decimals
  mark_price?: string
  // The 8h average funding rate of the instrument, expressed in percentage points
  funding_rate_8_h_avg?: string
}

export interface IGetClaimableEcosystemBadgeResponse {
  // The epoch badge
  badge?: IEpochBadge
  // Whether the badge is claimable
  is_claimable?: boolean
  // The time when the badge is claimable
  claimable_until?: string
}

export interface IInitialLeverageResult {
  // The instrument to get the leverage for
  instrument?: string
  // The initial leverage of the sub account
  leverage?: string
  // The min leverage this sub account can set
  min_leverage?: string
  // The max leverage this sub account can set
  max_leverage?: string
}

export interface IInstrument {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The asset ID used for instrument signing.
  instrument_hash?: string
  // The base currency
  base?: ECurrency
  // The quote currency
  quote?: ECurrency
  // The kind of instrument
  kind?: EKind
  // The expiry time of the instrument in unix nanoseconds
  expiry?: string
  // The strike price of the instrument, expressed in `9` decimals
  strike_price?: string
  // Venues that this instrument can be traded at
  venues?: EVenue[]
  // The settlement period of the instrument
  settlement_period?: EInstrumentSettlementPeriod
  // The smallest denomination of the base asset supported by GRVT (+3 represents 0.001, -3 represents 1000, 0 represents 1)
  base_decimals?: number
  // The smallest denomination of the quote asset supported by GRVT (+3 represents 0.001, -3 represents 1000, 0 represents 1)
  quote_decimals?: number
  // The size of a single tick, expressed in price decimal units
  tick_size?: string
  // The minimum contract size, expressed in base asset decimal units
  min_size?: string
  // The minimum block trade size, expressed in base asset decimal units
  min_block_trade_size?: string
  // Creation time in unix nanoseconds
  create_time?: string
  // The maximum position size, expressed in base asset decimal units
  max_position_size?: string
}

// All Websocket JSON RPC Requests are housed in this wrapper. You may specify a stream, and a list of feeds to subscribe to.
// If a `request_id` is supplied in this JSON RPC request, it will be propagated back to any relevant JSON RPC responses (including error).
// When subscribing to the same primary selector again, the previous secondary selector will be replaced. See `Overview` page for more details.
export interface IJSONRPCRequest {
  // The JSON RPC version to use for the request
  jsonrpc?: string
  // The method to use for the request (eg: `subscribe` / `unsubscribe` / `v1/instrument` )
  method?: string
  // The parameters for the request
  params?: any
  // Optional Field which is used to match the response by the client.
  // If not passed, this field will not be returned
  id?: number
}

// All Websocket JSON RPC Responses are housed in this wrapper. It returns a confirmation of the JSON RPC subscribe request.
// If a `request_id` is supplied in the JSON RPC request, it will be propagated back in this JSON RPC response.
export interface IJSONRPCResponse {
  // The JSON RPC version to use for the request
  jsonrpc?: string
  // The result for the request
  result?: any
  // The error for the request
  error?: IError
  // Optional Field which is used to match the response by the client.
  // If not passed, this field will not be returned
  id?: number
  // The method used in the request for this response (eg: `subscribe` / `unsubscribe` / `v1/instrument` )
  method?: string
}

export interface ILPPoint {
  // The main account id
  main_account_id?: string
  // Liquidity score
  liquidity_score?: string
  // The rank of user in the LP leaderboard
  rank?: number
}

export interface ILPSnapshot {
  // The main account id
  main_account_id?: string
  // The LP Asset
  lp_asset?: string
  // Underlying multiplier
  underlying_multiplier?: string
  // Maker trading volume
  maker_trading_volume?: string
  // Fast market multiplier
  bid_fast_market_multiplier?: number
  // Fast market multiplier
  ask_fast_market_multiplier?: number
  // Liquidity score
  liquidity_score?: string
  // The time when the snapshot was calculated
  calculate_at?: string
}

// Used for requests that take a MainAccountID
export interface IMainAccIDRequest {
  // MainAccountID being queried, passed as a hex string.
  main_account_id?: string
}

export interface IMarginTierResponse {
  lower_bound?: string
  rate?: string
}

export interface IMiniTicker {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: string
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The mark price of the instrument, expressed in `9` decimals
  mark_price?: string
  // The index price of the instrument, expressed in `9` decimals
  index_price?: string
  // The last traded price of the instrument (also close price), expressed in `9` decimals
  last_price?: string
  // The number of assets traded in the last trade, expressed in base asset decimal units
  last_size?: string
  // The mid price of the instrument, expressed in `9` decimals
  mid_price?: string
  // The best bid price of the instrument, expressed in `9` decimals
  best_bid_price?: string
  // The number of assets offered on the best bid price of the instrument, expressed in base asset decimal units
  best_bid_size?: string
  // The best ask price of the instrument, expressed in `9` decimals
  best_ask_price?: string
  // The number of assets offered on the best ask price of the instrument, expressed in base asset decimal units
  best_ask_size?: string
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
  order_id?: string
  // The subaccount initiating the order
  sub_account_id?: string
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
  // If True, Order must be a maker order. It has to fill the orderbook instead of match it.
  // If False, Order can be either a maker or taker order. <b>In this case, order creation is currently subject to a speedbump of 25ms to ensure orders are matched against updated orderbook quotes.</b>
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
  // If the order is a liquidation order.
  // Liquidation Orders can be signed by the insurance fund, however, SubAccount must be provably under MM.
  // Trade.FeeCharged will mean liquidation fee. Sent to insurance fund instead of fee collection fund.
  is_liquidation?: boolean
}

export interface IOrderLeg {
  // The instrument to trade in this leg
  instrument?: string
  // The total number of assets to trade in this leg, expressed in base asset decimal units.
  size?: string
  // The limit price of the order leg, expressed in `9` decimals.
  // This is the number of quote currency units to pay/receive for this leg.
  // This should be `null/0` if the order is a market order
  limit_price?: string
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
  // Gravity UI will generate a random clientOrderID for each order in the range [0, 2^63 - 1]
  // To prevent any conflicts, client machines should generate a random clientOrderID in the range [2^63, 2^64 - 1]
  //
  // When GRVT Backend receives an order with an overlapping clientOrderID, we will reject the order with rejectReason set to overlappingClientOrderId
  client_order_id?: string
  // [Filled by GRVT Backend] Time at which the order was received by GRVT in unix nanoseconds
  create_time?: string
  // Trigger fields are used to support any type of trigger order such as TP/SL
  trigger?: ITriggerOrderMetadata
  // Specifies the broker who brokered the order
  broker?: EBrokerTag
  // Specifies the source of the order
  source?: ESource
}

export interface IOrderState {
  // The status of the order
  status?: EOrderStatus
  // The reason for rejection or cancellation
  reject_reason?: EOrderRejectReason
  // The number of assets available for orderbook/RFQ matching. Sorted in same order as Order.Legs
  book_size?: string[]
  // The total number of assets traded. Sorted in same order as Order.Legs
  traded_size?: string[]
  // Time at which the order was updated by GRVT, expressed in unix nanoseconds
  update_time?: string
  // The average fill price of the order. Sorted in same order as Order.Legs
  avg_fill_price?: string[]
}

export interface IOrderStateFeed {
  // A unique 128-bit identifier for the order, deterministically generated within the GRVT backend
  order_id?: string
  // A unique identifier for the active order within a subaccount, specified by the client
  client_order_id?: string
  // The order state object being created or updated
  order_state?: IOrderState
}

export interface IOrderbookLevel {
  // The price of the level, expressed in `9` decimals
  price?: string
  // The number of assets offered, expressed in base asset decimal units
  size?: string
  // The number of open orders at this level
  num_orders?: number
}

export interface IOrderbookLevels {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: string
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The list of best bids up till query depth
  bids?: IOrderbookLevel[]
  // The list of best asks up till query depth
  asks?: IOrderbookLevel[]
}

export interface IPositionSummary {
  // The instrument being represented
  instrument?: string
  // The size of the position, expressed in base asset decimal units. Negative for short positions
  size?: string
  // The notional value of the position, negative for short assets, expressed in quote asset decimal units
  notional?: string
  // The entry price of the position, expressed in `9` decimals
  // Whenever increasing the size of a position, the entry price is updated to the new average entry price
  // `new_entry_price = (old_entry_price * old_size + trade_price * trade_size) / (old_size + trade_size)`
  entry_price?: string
  // The unrealized PnL of the position, expressed in quote asset decimal units
  // `unrealized_pnl = (mark_price - entry_price) * size`
  unrealized_pnl?: string
  // The realized PnL of the position, expressed in quote asset decimal units
  // `realized_pnl = (exit_price - entry_price) * exit_trade_size`
  realized_pnl?: string
  // The total PnL of the position, expressed in quote asset decimal units
  // `total_pnl = realized_pnl + unrealized_pnl`
  total_pnl?: string
  // The ROI of the position, expressed as a percentage
  // `roi = (total_pnl / (entry_price * abs(size))) * 100^`
  roi?: string
  // The index price of the quote currency. (reported in `USD`)
  quote_index_price?: string
}

export interface IPositions {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: string
  // The sub account ID that participated in the trade
  sub_account_id?: string
  // The instrument being represented
  instrument?: string
  // The size of the position, expressed in base asset decimal units. Negative for short positions
  size?: string
  // The notional value of the position, negative for short assets, expressed in quote asset decimal units
  notional?: string
  // The entry price of the position, expressed in `9` decimals
  // Whenever increasing the size of a position, the entry price is updated to the new average entry price
  // `new_entry_price = (old_entry_price * old_size + trade_price * trade_size) / (old_size + trade_size)`
  entry_price?: string
  // The exit price of the position, expressed in `9` decimals
  // Whenever decreasing the size of a position, the exit price is updated to the new average exit price
  // `new_exit_price = (old_exit_price * old_exit_trade_size + trade_price * trade_size) / (old_exit_trade_size + trade_size)`
  exit_price?: string
  // The mark price of the position, expressed in `9` decimals
  mark_price?: string
  // The unrealized PnL of the position, expressed in quote asset decimal units
  // `unrealized_pnl = (mark_price - entry_price) * size`
  unrealized_pnl?: string
  // The realized PnL of the position, expressed in quote asset decimal units
  // `realized_pnl = (exit_price - entry_price) * exit_trade_size`
  realized_pnl?: string
  // The total PnL of the position, expressed in quote asset decimal units
  // `total_pnl = realized_pnl + unrealized_pnl`
  total_pnl?: string
  // The ROI of the position, expressed as a percentage
  // `roi = (total_pnl / (entry_price * abs(size))) * 100^`
  roi?: string
  // The index price of the quote currency. (reported in `USD`)
  quote_index_price?: string
  // The estimated liquidation price
  est_liquidation_price?: string
  // The current leverage value for this position
  leverage?: string
}

export interface IPreOrderCheckResult {
  // The maximum quantity for each leg
  max_qty?: IAssetMaxQty[]
  // The margin required for the order (reported in `settle_currency`)
  margin_required?: string
  // Whether the order is valid
  order_valid?: boolean
  // The reason the order is invalid, if any
  reason?: string
  // The subAccount settle currency
  settle_currency?: ECurrency
}

// Request to retrieve the account summary for a given account
export interface IQueryAccountSummaryRequest {
  // The time interval to filter
  time_interval?: ETimeInterval
  // The main account ID to request for
  main_account_id?: string
  // The list subaccount IDs to filter by
  sub_account_i_ds?: string[]
}

// Query list of epoch badges
export interface IQueryEpochBadgePointDistributionRequest {
  // The numerical epoch index
  epoch?: number
  // The type of the reward program
  type?: ERewardProgramType
}

export interface IQueryEpochBadgePointDistributionResponse {
  // The list of epoch badges
  result?: IEpochBadgePointDistribution[]
}

// Query list of epoch badges
export interface IQueryEpochBadgeRequest {
  // The off chain account id to get referral stats
  account_id?: string
  // The numerical epoch index
  epoch?: number
  // The type of the reward program
  type?: ERewardProgramType
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IQueryEpochBadgeResponse {
  // The list of epoch badges
  result?: IEpochBadge[]
  // The cursor to indicate when to start the query from
  next?: string
}

// Query epoch by time or epoch number
export interface IQueryFindEpochRequest {
  // The time to query the epoch
  time?: string
  // The epoch number
  epoch?: number
}

export interface IQueryFindEpochResponse {
  // The epoch
  epoch?: IEpoch
}

export interface IQueryGetLatestLPSnapshotResponse {
  // The latest LP snapshot
  snapshot?: ILPSnapshot
}

export interface IQueryGetListEpochRequest {
  // The limit to query for
  limit?: number
}

export interface IQueryGetListEpochResponse {
  // The list of epochs
  result?: IEpoch[]
}

// Request to retrieve the trading performance trend
export interface IQueryTradingPerformanceTrendRequest {
  // The subaccount IDs to filter by
  sub_account_i_ds?: string[]
  // The time interval to filter by
  time_interval?: ETimeInterval
}

// Response to retrieve the trading performance trend
export interface IQueryTradingPerformanceTrendResponse {
  // The list of trading performance trends
  result?: ITradingPerformancePoint[]
  // The cursor to indicate when to start the next query from
  next?: string
}

export interface IRewardEpochInfo {
  // The epoch number
  epoch?: number
  // The start time of the epoch
  epoch_start_time?: string
  // The end time of the epoch
  epoch_end_time?: string
  // The status of the epoch
  status?: ERewardEpochStatus
}

export interface ISessionInformation {
  // country code of user based on IP address
  country_code?: string
  // unique identity of the session generated from client
  client_session_id?: string
  // screen size
  device_screen_size?: string
  // OS of user's device
  device_os?: string
  // OS version of user's device
  device_os_version?: string
}

export interface ISignature {
  // The address (public key) of the wallet signing the payload
  signer?: string
  // Signature R
  r?: string
  // Signature S
  s?: string
  // Signature V
  v?: number
  // Timestamp after which this signature expires, expressed in unix nanoseconds. Must be capped at 30 days
  expiration?: string
  // Users can randomly generate this value, used as a signature deconflicting key.
  // ie. You can send the same exact instruction twice with different nonces.
  // When the same nonce is used, the same payload will generate the same signature.
  // Our system will consider the payload a duplicate, and ignore it.
  nonce?: number
}

// All account summary returned by clickhouse
export interface ISnapAccountSummary {
  // The start of the interval in unix nanoseconds
  start_interval?: string
  // Total equity of the main account and all sub-accounts, denominated in USD
  total_equity?: string
}

// The funding account summary, that reports the total equity and spot balances of a funding (main) account
export interface ISnapFundingAccountSummary {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: string
  // The start of the interval in unix nanoseconds
  start_interval?: string
  // The main account ID of the account to which the summary belongs
  main_account_id?: string
  // Total equity of the main account, denominated in USD
  total_equity?: string
  // The list of spot assets owned by this main account, and their balances
  spot_balances?: ISpotBalance[]
}

export interface ISnapSubAccountSummary {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: string
  // The start of the interval in unix nanoseconds
  start_interval?: string
  // The sub account ID this entry refers to
  sub_account_id?: string
  // The notional value of your account if all positions are closed, excluding trading fees (reported in `settle_currency`).
  // `total_equity = sum(spot_balance.balance * spot_balance.index_price) / settle_index_price + unrealized_pnl`
  total_equity?: string
  // The total unrealized PnL of all positions owned by this subaccount, denominated in quote currency decimal units.
  // `unrealized_pnl = sum(position.unrealized_pnl * position.quote_index_price) / settle_index_price`
  unrealized_pnl?: string
  // The list of positions owned by this sub account
  positions?: IPositionSummary[]
}

export interface ISpotBalance {
  // The currency you hold a spot balance in
  currency?: ECurrency
  // This currency's balance in this trading account.
  balance?: string
  // The index price of this currency. (reported in `USD`)
  index_price?: string
}

export interface IStreamReference {
  // The channel to subscribe to (eg: ticker.s / ticker.d)
  stream?: string
  // The list of selectors for the stream
  selectors?: string[]
}

export interface ISubAccount {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: string
  // The sub account ID this entry refers to
  sub_account_id?: string
  // The type of margin algorithm this subaccount uses
  margin_type?: EMarginType
  // The settlement, margin, and reporting currency of this account.
  // This subaccount can only open positions quoted in this currency
  //
  // In the future, when users select a Multi-Currency Margin Type, this will be USD
  // All other assets are converted to this currency for the purpose of calculating margin
  settle_currency?: ECurrency
  // The total unrealized PnL of all positions owned by this subaccount, denominated in quote currency decimal units.
  // `unrealized_pnl = sum(position.unrealized_pnl * position.quote_index_price) / settle_index_price`
  unrealized_pnl?: string
  // The notional value of your account if all positions are closed, excluding trading fees (reported in `settle_currency`).
  // `total_equity = sum(spot_balance.balance * spot_balance.index_price) / settle_index_price + unrealized_pnl`
  total_equity?: string
  // The `total_equity` required to open positions in the account (reported in `settle_currency`).
  // Computation is different depending on account's `margin_type`
  initial_margin?: string
  // The `total_equity` required to avoid liquidation of positions in the account (reported in `settle_currency`).
  // Computation is different depending on account's `margin_type`
  maintenance_margin?: string
  // The notional value available to transfer out of the trading account into the funding account (reported in `settle_currency`).
  // `available_balance = total_equity - initial_margin - min(unrealized_pnl, 0)`
  available_balance?: string
  // The list of spot assets owned by this sub account, and their balances
  spot_balances?: ISpotBalance[]
  // The list of positions owned by this sub account
  positions?: IPositions[]
  // The index price of the settle currency. (reported in `USD`)
  settle_index_price?: string
}

// Similar to sub-account trade, but not divided by individual assets.
export interface ISubAccountTradeAggregation {
  // The sub account id
  sub_account_id?: string
  // Total fee paid
  total_fee?: string
  // Total volume traded
  total_trade_volume?: string
  // Number of trades
  num_traded?: string
  // Total positive fee paid by user
  positive_fee?: string
  // The signer of the trade
  signer?: string
  // Realized PnL
  realized_pnl?: string
}

// Contains metadata for Take Profit (TP) and Stop Loss (SL) trigger orders.
//
// ### Fields:
// - **triggerBy**: Defines the price type that activates the order (e.g., index price).
// - **triggerPrice**: The price at which the order is triggered, expressed in `9` decimal precision.
//
//
export interface ITPSLOrderMetadata {
  // Defines the price type that activates a Take Profit (TP) or Stop Loss (SL) order
  trigger_by?: ETriggerBy
  // The Trigger Price of the order, expressed in `9` decimals.
  trigger_price?: string
  // If True, the order will close the position when the trigger price is reached
  close_position?: boolean
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
  event_time?: string
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The mark price of the instrument, expressed in `9` decimals
  mark_price?: string
  // The index price of the instrument, expressed in `9` decimals
  index_price?: string
  // The last traded price of the instrument (also close price), expressed in `9` decimals
  last_price?: string
  // The number of assets traded in the last trade, expressed in base asset decimal units
  last_size?: string
  // The mid price of the instrument, expressed in `9` decimals
  mid_price?: string
  // The best bid price of the instrument, expressed in `9` decimals
  best_bid_price?: string
  // The number of assets offered on the best bid price of the instrument, expressed in base asset decimal units
  best_bid_size?: string
  // The best ask price of the instrument, expressed in `9` decimals
  best_ask_price?: string
  // The number of assets offered on the best ask price of the instrument, expressed in base asset decimal units
  best_ask_size?: string
  // The current funding rate of the instrument, expressed in percentage points
  funding_rate_8h_curr?: string
  // The average funding rate of the instrument (over last 8h), expressed in percentage points
  funding_rate_8h_avg?: string
  // The interest rate of the underlying, expressed in centibeeps (1/100th of a basis point)
  interest_rate?: string
  // [Options] The forward price of the option, expressed in `9` decimals
  forward_price?: string
  // The 24 hour taker buy volume of the instrument, expressed in base asset decimal units
  buy_volume_24h_b?: string
  // The 24 hour taker sell volume of the instrument, expressed in base asset decimal units
  sell_volume_24h_b?: string
  // The 24 hour taker buy volume of the instrument, expressed in quote asset decimal units
  buy_volume_24h_q?: string
  // The 24 hour taker sell volume of the instrument, expressed in quote asset decimal units
  sell_volume_24h_q?: string
  // The 24 hour highest traded price of the instrument, expressed in `9` decimals
  high_price?: string
  // The 24 hour lowest traded price of the instrument, expressed in `9` decimals
  low_price?: string
  // The 24 hour first traded price of the instrument, expressed in `9` decimals
  open_price?: string
  // The open interest in the instrument, expressed in base asset decimal units
  open_interest?: string
  // The ratio of accounts that are net long vs net short on this instrument
  long_short_ratio?: string
}

// The gross/net exposure of a asset.
export interface ITimedAssetExposureSummary {
  // The start time of the interval
  start_interval?: string
  // The list of asset exposures
  asset_exposures?: IAssetExposureSummary[]
}

// All private RFQs and Private AXEs will be filtered out from the responses
export interface ITrade {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: string
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // If taker was the buyer on the trade
  is_taker_buyer?: boolean
  // The number of assets being traded, expressed in base asset decimal units
  size?: string
  // The traded price, expressed in `9` decimals
  price?: string
  // The mark price of the instrument at point of trade, expressed in `9` decimals
  mark_price?: string
  // The index price of the instrument at point of trade, expressed in `9` decimals
  index_price?: string
  // The interest rate of the underlying at point of trade, expressed in centibeeps (1/100th of a basis point)
  interest_rate?: string
  // [Options] The forward price of the option at point of trade, expressed in `9` decimals
  forward_price?: string
  // A trade identifier, globally unique, and monotonically increasing (not by `1`).
  // All trades sharing a single taker execution share the same first component (before `-`), and `event_time`.
  // `trade_id` is guaranteed to be consistent across MarketData `Trade` and Trading `Fill`.
  trade_id?: string
  // The venue where the trade occurred
  venue?: EVenue
  // If the trade was a liquidation
  is_liquidation?: boolean
  // A trade index
  trade_index?: number
  // If the trade is a RPI trade
  is_rpi?: boolean
}

export interface ITraderLeaderboardUser {
  // The off chain account id
  account_id?: string
  // The rank of the account in the Trader
  rank?: number
  // Total Trader point
  total_point?: number
  // The twitter username of the account
  twitter_username?: string
}

export interface ITraderMetric {
  // Total fee paid
  total_fee?: string
  // Total trader point of this epoch/phase
  total_point?: number
}

// Trading performance trend returned by clickhouse
export interface ITradingPerformancePoint {
  // The start time of the interval
  start_interval?: string
  // The trading volume of the account
  trading_volume?: string
  // Realized PnL in USDT
  realized_pnl?: string
}

export interface ITransferHistory {
  // The transaction ID of the transfer
  tx_id?: string
  // The account to transfer from
  from_account_id?: string
  // The subaccount to transfer from (0 if transferring from main account)
  from_sub_account_id?: string
  // The account to deposit into
  to_account_id?: string
  // The subaccount to transfer to (0 if transferring to main account)
  to_sub_account_id?: string
  // The token currency to transfer
  currency?: ECurrency
  // The number of tokens to transfer
  num_tokens?: string
  // The signature of the transfer
  signature?: ISignature
  // The timestamp of the transfer in unix nanoseconds
  event_time?: string
  // The type of transfer
  transfer_type?: ETransferType
  // The metadata of the transfer
  transfer_metadata?: string
}

// Contains metadata related to trigger orders, such as Take Profit (TP) or Stop Loss (SL).
//
// Trigger orders are used to automatically execute an order when a predefined price condition is met, allowing traders to implement risk management strategies.
//
//
export interface ITriggerOrderMetadata {
  // Type of the trigger order. eg: Take Profit, Stop Loss, etc
  trigger_type?: ETriggerType
  // Contains metadata for Take Profit (TP) and Stop Loss (SL) trigger orders.
  //
  //
  tpsl?: ITPSLOrderMetadata
}

export interface IUserCategoryAffinityScore {
  // The off chain account id
  account_id?: string
  // target category
  category_id?: string
  // affinity score
  affinity_score?: number
}

// event of user
export interface IUserTrackingEvent {
  // uuid for event
  event_id?: string
  // version of tracking
  tracking_version?: number
  // timestamp of event
  event_time?: string
  // event type
  event_type?: string
  // event sub type
  event_sub_type?: string
  // unique identity of the session generated from client
  client_session_id?: string
  // OS of user's device
  device_os?: string
  // OS version of user's device
  device_os_version?: string
  // sub account id
  sub_account_id?: string
  // trading session key
  trading_address?: string
  // screen size
  screen_size?: string
  // event data
  event_data?: string
  // user id
  user_id?: string
  // account id
  account_id?: string
  // auth session hash of the authenticated session on backend
  auth_session_hash?: string
  // country code of user based on IP address
  country_code?: string
}

export interface IUserVaultCategoryEventPayLoad {
  // category ID of event
  category_id?: string
  // vault ID
  vault_id?: string
  // action of event. search/filter/invest...
  action?: string
  // number of bumps in this event. default 1
  num_bumps?: string
}

export interface IVaultInvestResults {
  // The index price of the invested token at point of vault investment
  token_index_price?: string
  // The total equity of the vault at point of vault investment
  vault_total_equity?: string
  // The share price of the vault LP token at point of vault investment
  vault_share_price?: string
  // The number of LP tokens received upon vault investment
  num_lp_tokens?: string
}

export interface IVaultManagementFeeTickResults {
  // The total equity of the vault at point of vault redemption
  vault_total_equity?: string
  // The share price of the vault LP token at point of vault redemption
  vault_share_price?: string
  // The number of tokens paid as management fees to vault managers
  fees_charged?: string
}

export interface IVaultParams {
  // Annualized management fee charged by the vault (0-400 centibeeps, i.e. 0-4%)
  management_fee_centi_beeps?: string
  // Performance fee percentage charged on profits upon LP Token redemption (0-4000 centibeeps, i.e. 0-40%)
  performance_fee_centi_beeps?: string
  // Marketing fee percentage taken from Vault Manager earnings (0-4000 centibeeps, i.e. 0-40%). User vaults: Must be 0%. Partner vaults: Must be >= 500 centibeeps (5%). Fee reductions based on vault valuation: 0-60%: Full fee, 60-70%: 20% reduction, 70-80%: 40% reduction, 80-90%: 60% reduction, 90%+: 80% reduction
  marketing_fee_centi_beeps?: string
  // Vault type
  vault_type?: EVaultType
  // Maximum valuation cap for the vault in USD (6 decimal places). Range: 1M-100M USD. No new investments accepted after cap is reached
  valuation_cap_usd_6_dec?: string
  // Minimum period (in seconds) for vault manager to service redemptions. Range: 1-28 days (86400-2419200 seconds). Redemption is only serviced after this period has elapsed from request
  min_redemption_period_seconds?: number
  // Maximum period (in seconds) for vault manager to service redemptions. Range: 1-28 days (86400-2419200 seconds). Forced redemption occurs if requests exceed this period
  max_redemption_period_seconds?: number
  // Multiplier of Initial Margin (IM) for automatic redemption processing. Range: 8000-20000 centibeeps (80%-200%). Auto-redemption occurs when: Total Equity > barrier * Initial Margin, or Available Balance > barrier * Initial Margin where Available Balance = Total Equity - Initial Margin - min(Unrealized PnL, 0)
  auto_redemption_barrier_centi_beeps?: string
  // Reward sharing ratio for the vault. GRVT points earned by the vault would be redistributed to investors in the ratio of this field. 0% indicates that vault manager get all rewards. Range: 0-10000 centibeeps (0%-100%). 10000 centibeeps = 100%
  reward_sharing_ratio_centi_beeps?: string
}

export interface IVaultRedeemResults {
  // The index price of the redeemed token at point of vault redemption
  token_index_price?: string
  // The total equity of the vault at point of vault redemption
  vault_total_equity?: string
  // The share price of the vault LP token at point of vault redemption
  vault_share_price?: string
  // The currency to redeemed
  currency?: ECurrency
  // The number of tokens received upon vault redemption
  num_tokens?: string
  // The average entry share price at point of vault redemption. Used to compute performance fee payments
  avg_entry_price?: string
  // The number of tokens paid as performance fees upon vault redemption
  fees_charged?: string
}

export interface IWSCancelFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // Data relating to the status of the cancellation attempt
  feed?: ICancelStatusFeed
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a feed of time-to-live expiry events for order cancellations requested by a given subaccount.
// **This stream presently only provides expiry updates for cancel-order requests set with a valid TTL value**.
// Successful order cancellations will reflect as updates published to the [order-state stream](https://api-docs.grvt.io/trading_streams/#order-state).
// _A future release will expand the functionality of this stream to provide more general status updates on order cancellation requests._
// Each Order can be uniquely identified by its `client_order_id`.
//
export interface IWSCancelFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: string
}

export interface IWSCandlestickFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // A candlestick entry matching the request filters
  feed?: ICandlestick
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a stream of Kline/Candlestick updates for an instrument. A Kline is uniquely identified by its open time.
// A new Kline is published every interval (if it exists). Upon subscription, the server will send the 5 most recent Kline for the requested interval.
export interface IWSCandlestickFeedSelectorV1 {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The interval of each candlestick
  interval?: ECandlestickInterval
  // The type of candlestick data to retrieve
  type?: ECandlestickType
}

// Subscribes to a feed of deposit updates.
export interface IWSDepositFeedDataV1 {
  // The websocket channel to which the response is sent
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // The Deposit object
  feed?: IDeposit
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a feed of deposits. This will execute when there is any deposit to selected account.
// To subscribe to a main account, specify the account ID (eg. `0x9fe3758b67ce7a2875ee4b452f01a5282d84ed8a`).
export interface IWSDepositFeedSelectorV1 {
  // The main account ID to request for
  main_account_id?: string
}

export interface IWSFillFeedDataV1 {
  // The websocket channel to which the response is sent
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // A private trade matching the request filter
  feed?: IFill
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a feed of private trade updates. This happens when a trade is executed.
// To subscribe to all private trades, specify an empty `instrument` (eg. `2345123`).
// Otherwise, specify the `instrument` to only receive private trades for that instrument (eg. `2345123-BTC_USDT_Perp`).
export interface IWSFillFeedSelectorV1 {
  // The sub account ID to request for
  sub_account_id?: string
  // The instrument filter to apply.
  instrument?: string
}

// Returns a list of all rooms the client has subscribed to.
export interface IWSListStreamsResult {
  // The list of stream references  the connection is connected to
  stream_reference?: IStreamReference[]
}

export interface IWSMiniTickerFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // A mini ticker matching the request filter
  feed?: IMiniTicker
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a mini ticker feed for a single instrument. The `mini.s` channel offers simpler integration. To experience higher publishing rates, please use the `mini.d` channel.
// Unlike the `mini.d` channel which publishes an initial snapshot, then only streams deltas after, the `mini.s` channel publishes full snapshots at each feed.
//
// The Delta feed will work as follows:<ul><li>On subscription, the server will send a full snapshot of the mini ticker.</li><li>After the snapshot, the server will only send deltas of the mini ticker.</li><li>The server will send a delta if any of the fields in the mini ticker have changed.</li></ul>
//
// Field Semantics:<ul><li>[DeltaOnly] If a field is not updated, {}</li><li>If a field is updated, {field: '123'}</li><li>If a field is set to zero, {field: '0'}</li><li>If a field is set to null, {field: ''}</li></ul>
export interface IWSMiniTickerFeedSelectorV1 {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (0 - `raw`, 50, 100, 200, 500, 1000, 5000)
  // Snapshot (200, 500, 1000, 5000)
  rate?: number
}

export interface IWSOrderFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // The order object being created or updated
  feed?: IOrder
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a feed of order updates pertaining to orders made by your account.
// Each Order can be uniquely identified by its `order_id` or `client_order_id`.
// To subscribe to all orders, specify an empty `instrument` (eg. `2345123`).
// Otherwise, specify the `instrument` to only receive orders for that instrument (eg. `2345123-BTC_USDT_Perp`).
export interface IWSOrderFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: string
  // The instrument filter to apply.
  instrument?: string
}

export interface IWSOrderGroupFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // The order object being created or updated
  feed?: IClientOrderIDsByGroup
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a feed of order group to get updated when a new group is created for the subAccount specified.
//
export interface IWSOrderGroupFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: string
}

export interface IWSOrderStateFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // The Order State Feed
  feed?: IOrderStateFeed
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a feed of order updates pertaining to orders made by your account.
// Unlike the Order Stream, this only streams state updates, drastically improving throughput, and latency.
// Each Order can be uniquely identified by its `order_id` or `client_order_id`.
// To subscribe to all orders, specify an empty `instrument` (eg. `2345123`).
// Otherwise, specify the `instrument` to only receive orders for that instrument (eg. `2345123-BTC_USDT_Perp`).
export interface IWSOrderStateFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: string
  // The instrument filter to apply.
  instrument?: string
}

export interface IWSOrderbookLevelsFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // An orderbook levels object matching the request filter
  feed?: IOrderbookLevels
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to aggregated orderbook updates for a single instrument. The `book.s` channel offers simpler integration. To experience higher publishing rates, please use the `book.d` channel.
// Unlike the `book.d` channel which publishes an initial snapshot, then only streams deltas after, the `book.s` channel publishes full snapshots at each feed.
//
// The Delta feed will work as follows:<ul><li>On subscription, the server will send a full snapshot of all levels of the Orderbook.</li><li>After the snapshot, the server will only send levels that have changed in value.</li></ul>
//
// Subscription Pattern:<ul><li>Delta - `instrument@rate`</li><li>Snapshot - `instrument@rate-depth`</li></ul>
//
// Field Semantics:<ul><li>[DeltaOnly] If a level is not updated, level not published</li><li>If a level is updated, {size: '123'}</li><li>If a level is set to zero, {size: '0'}</li><li>Incoming levels will be published as soon as price moves</li><li>Outgoing levels will be published with `size = 0`</li></ul>
export interface IWSOrderbookLevelsFeedSelectorV1 {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (50, 100, 500, 1000)
  // Snapshot (500, 1000)
  rate?: number
  // Depth of the order book to be retrieved
  // Delta(0 - `unlimited`)
  // Snapshot(10, 50, 100, 500)
  depth?: number
}

export interface IWSPositionsFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // A Position being created or updated matching the request filter
  feed?: IPositions
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a feed of position updates.
// Updates get published when a trade is executed, and when leverage configurations are changed for instruments with ongoing positions.
// To subscribe to all positions, specify an empty `instrument` (eg. `2345123`).
// Otherwise, specify the `instrument` to only receive positions for that instrument (eg. `2345123-BTC_USDT_Perp`).
export interface IWSPositionsFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: string
  // The instrument filter to apply.
  instrument?: string
}

// All V1 Websocket Subscription Requests are housed in this wrapper. You may specify a stream and a list of feeds to subscribe to.
// When subscribing to the same primary selector again, the previous secondary selector will be replaced. See `Overview` page for more details.
// Sequence numbers can be either gateway-specific or global:
// - **Gateway Unique Sequence Number**: Increments by one per stream, resets to 0 on gateway restart.
// - **Global Unique Sequence Number**: A cluster-wide unique number assigned to each cluster payload, does not reset on gateway restarts, and can be used to track and identify message order across streams using `sequence_number` and `prev_sequence_number` in the feed response.
// Set `useGlobalSequenceNumber = true` if you need a persistent, unique identifier across all streams or ordering across multiple feeds.
export interface IWSSubscribeParams {
  // The channel to subscribe to (eg: ticker.s / ticker.d)
  stream?: string
  // The list of feeds to subscribe to
  selectors?: string[]
  // Whether to use the global sequence number for the stream
  use_global_sequence_number?: boolean
}

// All V1 Websocket Requests are housed in this wrapper. You may specify a stream, and a list of feeds to subscribe to.
// If a `request_id` is supplied in this JSON RPC request, it will be propagated back to any relevant JSON RPC responses (including error).
// When subscribing to the same primary selector again, the previous secondary selector will be replaced. See `Overview` page for more details.
export interface IWSSubscribeRequestV1Legacy {
  // Optional Field which is used to match the response by the client.
  // If not passed, this field will not be returned
  request_id?: number
  // The channel to subscribe to (eg: ticker.s / ticker.d)
  stream?: string
  // The list of feeds to subscribe to
  feed?: string[]
  // The method to use for the request (eg: subscribe / unsubscribe)
  method?: string
  // Whether the request is for full data or lite data
  is_full?: boolean
}

// All V1 Websocket Responses are housed in this wrapper. It returns a confirmation of the JSON RPC subscribe request.
// If a `request_id` is supplied in the JSON RPC request, it will be propagated back in this JSON RPC response.
// To ensure you always know if you have missed any payloads, GRVT servers apply the following heuristics to sequence numbers:<ul><li>All snapshot payloads will have a sequence number of `0`. All delta payloads will have a sequence number of `1+`. So its easy to distinguish between snapshots, and deltas</li><li>Num snapshots returned in Response (per stream): You can ensure that you received the right number of snapshots</li><li>First sequence number returned in Response (per stream): You can ensure that you received the first stream, without gaps from snapshots</li><li>Sequence numbers should always monotonically increase by `1`. If it decreases, or increases by more than `1`. Please reconnect</li><li>Duplicate sequence numbers are possible due to network retries. If you receive a duplicate, please ignore it, or idempotently re-update it.</li></ul>
// When subscribing to the same primary selector again, the previous secondary selector will be replaced. See `Overview` page for more details.
export interface IWSSubscribeResponseV1Legacy {
  // Optional Field which is used to match the response by the client.
  // If not passed, this field will not be returned
  request_id?: number
  // The channel to subscribe to (eg: ticker.s / ticker.d)
  stream?: string
  // The list of feeds subscribed to
  subs?: string[]
  // The list of feeds unsubscribed from
  unsubs?: string[]
  // The number of snapshot payloads to expect for each subscribed feed. Returned in same order as `subs`
  num_snapshots?: number[]
  // The first sequence number to expect for each subscribed feed. Returned in same order as `subs`
  first_sequence_number?: string[]
  // The sequence number of the most recent message in the stream. Next received sequence number must be larger than this one. Returned in same order as `subs`
  latest_sequence_number?: string[]
}

// To ensure you always know if you have missed any payloads, GRVT servers apply the following heuristics to sequence numbers:<ul><li>All snapshot payloads will have a sequence number of `0`. All delta payloads will have a sequence number of `1+`. So its easy to distinguish between snapshots, and deltas</li><li>Num snapshots returned in Response (per stream): You can ensure that you received the right number of snapshots</li><li>First sequence number returned in Response (per stream): You can ensure that you received the first stream, without gaps from snapshots</li><li>Sequence numbers should always monotonically increase by `1`. If it decreases, or increases by more than `1`. Please reconnect</li><li>Duplicate sequence numbers are possible due to network retries. If you receive a duplicate, please ignore it, or idempotently re-update it.</li></ul>
// When subscribing to the same primary selector again, the previous secondary selector will be replaced. See `Overview` page for more details.
export interface IWSSubscribeResult {
  // The channel to subscribe to (eg: ticker.s / ticker.d)
  stream?: string
  // The list of feeds subscribed to
  subs?: string[]
  // The list of feeds unsubscribed from
  unsubs?: string[]
  // The number of snapshot payloads to expect for each subscribed feed. Returned in same order as `subs`
  num_snapshots?: number[]
  // The first sequence number to expect for each subscribed feed. Returned in same order as `subs`
  first_sequence_number?: string[]
  // The sequence number of the most recent message in the stream. Next received sequence number must be larger than this one. Returned in same order as `subs`
  latest_sequence_number?: string[]
}

export interface IWSTickerFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // A ticker matching the request filter
  feed?: ITicker
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a ticker feed for a single instrument. The `ticker.s` channel offers simpler integration. To experience higher publishing rates, please use the `ticker.d` channel.
// Unlike the `ticker.d` channel which publishes an initial snapshot, then only streams deltas after, the `ticker.s` channel publishes full snapshots at each feed.
//
// The Delta feed will work as follows:<ul><li>On subscription, the server will send a full snapshot of the ticker.</li><li>After the snapshot, the server will only send deltas of the ticker.</li><li>The server will send a delta if any of the fields in the ticker have changed.</li></ul>
//
// Field Semantics:<ul><li>[DeltaOnly] If a field is not updated, {}</li><li>If a field is updated, {field: '123'}</li><li>If a field is set to zero, {field: '0'}</li><li>If a field is set to null, {field: ''}</li></ul>
export interface IWSTickerFeedSelectorV1 {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (100, 200, 500, 1000, 5000)
  // Snapshot (500, 1000, 5000)
  rate?: number
}

export interface IWSTradeFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // A public trade matching the request filter
  feed?: ITrade
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a stream of Public Trades for an instrument.
export interface IWSTradeFeedSelectorV1 {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The limit to query for. Valid values are (50, 200, 500, 1000). Default is 50
  limit?: number
}

// Subscribes to a feed of transfer updates.
export interface IWSTransferFeedDataV1 {
  // The websocket channel to which the response is sent
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // The transfer history matching the requested filters
  feed?: ITransferHistory
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a feed of transfers. This will execute when there is any transfer to or from the selected account.
// To subscribe to a main account, specify the account ID (eg. `0x9fe3758b67ce7a2875ee4b452f01a5282d84ed8a`).
// To subscribe to a sub account, specify the main account and the sub account dash separated (eg. `0x9fe3758b67ce7a2875ee4b452f01a5282d84ed8a-1920109784202388`).
export interface IWSTransferFeedSelectorV1 {
  // The main account ID to request for
  main_account_id?: string
  // The sub account ID to request for
  sub_account_id?: string
}

// Returns a list of all rooms the client has unsubscribed from.
export interface IWSUnsubscribeAllResult {
  // The list of stream references unsubscribed from
  stream_reference?: IStreamReference[]
}

// All V1 Websocket Unsubscription Requests are housed in this wrapper. You may specify a stream, a list of feeds and whether those feeds use global sequence numbers to unsubscribe from.
export interface IWSUnsubscribeParams {
  // The channel to unsubscribe from (eg: ticker.s / ticker.d)
  stream?: string
  // The list of feeds to unsubscribe from
  selectors?: string[]
  // Whether to use the global sequence number for the stream
  use_global_sequence_number?: boolean
}

// Returns a confirmation of all unsubscribes
export interface IWSUnsubscribeResult {
  // The channel to subscribe to (eg: ticker.s / ticker.d)
  stream?: string
  // The list of feeds unsubscribed from
  unsubs?: string[]
}

// Subscribes to a feed of withdrawal updates.
export interface IWSWithdrawalFeedDataV1 {
  // The websocket channel to which the response is sent
  stream?: string
  // Primary selector
  selector?: string
  // A sequence number used to determine message order within a stream.
  // - If `useGlobalSequenceNumber` is **false**, this returns the gateway sequence number, which increments by one locally within each stream and resets on gateway restarts.
  // - If `useGlobalSequenceNumber` is **true**, this returns the global sequence number, which uniquely identifies messages across the cluster.
  //   - A single cluster payload can be multiplexed into multiple stream payloads.
  //   - To distinguish each stream payload, a `dedupCounter` is included.
  //   - The returned sequence number is computed as: `cluster_sequence_number * 10^5 + dedupCounter`.
  sequence_number?: string
  // The Withdrawal object
  feed?: IWithdrawal
  // The previous sequence number that determines the message order
  prev_sequence_number?: string
}

// Subscribes to a feed of withdrawals. This will execute when there is any withdrawal from the selected account.
// To subscribe to a main account, specify the account ID (eg. `0x9fe3758b67ce7a2875ee4b452f01a5282d84ed8a`).
export interface IWSWithdrawalFeedSelectorV1 {
  // The main account ID to request for
  main_account_id?: string
}

export interface IWithdrawal {
  // The subaccount to withdraw from
  from_account_id?: string
  // The ethereum address to withdraw to
  to_eth_address?: string
  // The token currency to withdraw
  currency?: ECurrency
  // The number of tokens to withdraw
  num_tokens?: string
  // The signature of the withdrawal
  signature?: ISignature
}

export interface IWithdrawalHistory {
  // The transaction ID of the withdrawal
  tx_id?: string
  // The subaccount to withdraw from
  from_account_id?: string
  // The ethereum address to withdraw to
  to_eth_address?: string
  // The token currency to withdraw
  currency?: ECurrency
  // The number of tokens to withdraw
  num_tokens?: string
  // The signature of the withdrawal
  signature?: ISignature
  // The timestamp of the withdrawal in unix nanoseconds
  event_time?: string
}
