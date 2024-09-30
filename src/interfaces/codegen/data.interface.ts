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
  // the market order was cancelled after no/partial fill. Takes precedence over other TimeInForce cancel reasons
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

export enum ESubAccountTradeInterval {
  // 1 month
  SAT_1_MO = 'SAT_1_MO',
  // 1 day
  SAT_1_D = 'SAT_1_D',
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
}

export interface IAPISettlementPrice {
  // The base currency of the settlement price
  base?: ECurrency
  // The quote currency of the settlement price
  quote?: ECurrency
  // The settlement timestamp of the settlement price, expressed in unix nanoseconds
  settlement_time?: bigint
  // The settlement price, expressed in `9` decimals
  settlement_price?: string
}

// Used to acknowledge a request has been received and will be processed
export interface IAckResponse {
  // Gravity has acknowledged that the request has been successfully received and it will process it in the backend
  acknowledgement?: boolean
}

// The aggregated account summary, that reports the total equity and spot balances of a funding (main) account, and its constituent trading (sub) accounts
export interface IApiAggregatedAccountSummaryResponse {
  // The main account ID of the account to which the summary belongs
  main_account_id?: bigint
  // Total equity of the main (+ sub) account, denominated in USD
  total_equity?: string
  // The list of spot assets owned by this main (+ sub) account, and their balances
  spot_balances?: ISpotBalance[]
}

// Cancel all orders on the orderbook for this trading account. This may not match new orders in flight.
export interface IApiCancelAllOrdersRequest {
  // The subaccount ID cancelling all orders
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be cancelled
  kind?: EKind[]
  // The underlying filter to apply. If nil, this defaults to all underlyings. Otherwise, only entries matching the filter will be cancelled
  underlying?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be cancelled
  quote?: ECurrency[]
}

export interface IApiCancelAllOrdersResponse {
  // The number of orders cancelled
  num_cancelled?: number
}

// Cancel an order on the orderbook for this trading account. Either `order_id` or `client_order_id` must be provided.
export interface IApiCancelOrderRequest {
  // The subaccount ID cancelling the order
  sub_account_id?: bigint
  // Cancel the order with this `order_id`
  order_id?: bigint
  // Cancel the order with this `client_order_id`
  client_order_id?: bigint
}

export interface IApiCancelOrderResponse {
  // The cancelled order
  order?: IOrder
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
  start_time?: bigint
  // End time of kline data in unix nanoseconds
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiCandlestickResponse {
  // The candlestick result set for given interval
  results?: ICandlestick[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// Create an order on the orderbook for this trading account.
export interface IApiCreateOrderRequest {
  // The order to create
  order?: IOrder
}

export interface IApiCreateOrderResponse {
  // The created order
  order?: IOrder
}

// The request to get the historical deposits of an account
// The history is returned in reverse chronological order
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiDepositHistoryRequest {
  // The token currency to query for, if nil or empty, return all deposits. Otherwise, only entries matching the filter will be returned
  token_currency?: ECurrency[]
  // The start time to query for in unix nanoseconds
  start_time?: bigint
  // The end time to query for in unix nanoseconds
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the next query from
  cursor?: string
}

export interface IApiDepositHistoryResponse {
  // The deposit history matching the request account
  results?: IDepositHistory[]
  // The cursor to indicate when to start the next query from
  next?: string
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
  num_tokens?: string
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
  total_point?: bigint
  // The time when the ecosystem points were last calculated
  last_calculated_at?: bigint
}

export interface IApiFindTraderEpochMetricResponse {
  // Phase zero metric
  metric?: ITraderMetric
  // The rank of the account in the trader
  rank?: number
  // The total number of accounts in the trader
  total?: number
  // The time when the trader points were last calculated
  last_calculated_at?: bigint
}

export interface IApiFindTraderLeaderboardResponse {
  // The list of trader leaderboard users
  users?: ITraderLeaderboardUser[]
}

// The funding account summary, that reports the total equity and spot balances of a funding (main) account
export interface IApiFundingAccountSummaryResponse {
  // The main account ID of the account to which the summary belongs
  main_account_id?: bigint
  // Total equity of the main account, denominated in USD
  total_equity?: string
  // The list of spot assets owned by this main account, and their balances
  spot_balances?: ISpotBalance[]
}

// Lookup the historical funding rate of a perpetual future.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiFundingRateRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // Start time of funding rate in unix nanoseconds
  start_time?: bigint
  // End time of funding rate in unix nanoseconds
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiFundingRateResponse {
  // The funding rate result set for given interval
  results?: IFundingRate[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// Fetch all instruments
export interface IApiGetAllInstrumentsRequest {
  // Fetch only active instruments
  is_active?: boolean
}

export interface IApiGetAllInstrumentsResponse {
  // List of instruments
  results?: IInstrument[]
}

export interface IApiGetEcosystemLeaderboardRequest {
  // Start time of the epoch - phase
  calculate_from?: bigint
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
  direct_invite_trading_volume?: bigint
  // Total volume traded by indirect invites multiple by 1e9
  indirect_invite_trading_volume?: bigint
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
  results?: IInstrument[]
}

// Fetch a single instrument by supplying the asset or instrument name
export interface IApiGetInstrumentRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
}

export interface IApiGetInstrumentResponse {
  // The instrument matching the request asset
  results?: IInstrument
}

export interface IApiGetLPLeaderboardRequest {
  // Start time of the epoch - phase
  start_interval?: bigint
  // The number of accounts to return
  limit?: number
  // The kind filter to apply
  kind?: EKind
  // The base filter to apply
  base?: ECurrency
}

export interface IApiGetLPLeaderboardResponse {
  // The list of LP points
  points?: ILPPoint[]
}

export interface IApiGetLPPointRequest {
  // Start time of the epoch - phase
  start_interval?: bigint
  // The kind filter to apply
  kind?: EKind
  // The base filter to apply
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
  snapshot?: ILPSnapshot
}

// startTime and endTime are optional parameters. The semantics of these parameters are as follows:<ul>
export interface IApiGetListFlatReferralRequest {
  // The off chain referrer account id to get all flat referrals
  referral_id?: string
  // Optional. Start time in unix nanoseconds
  start_time?: bigint
  // Optional. End time in unix nanoseconds
  end_time?: bigint
  // The off chain account id to get all user's referrers
  account_id?: string
}

export interface IApiGetListFlatReferralResponse {
  // The list of flat referrals
  flat_referrals?: IFlatReferral[]
}

// Retrieve the order for the account. Either `order_id` or `client_order_id` must be provided.
export interface IApiGetOrderRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // Filter for `order_id`
  order_id?: bigint
  // Filter for `client_order_id`
  client_order_id?: bigint
}

export interface IApiGetOrderResponse {
  // The order object for the requested filter
  order?: IOrder
}

export interface IApiGetTraderStatResponse {
  // Total fee paid
  total_fee?: bigint
}

export interface IApiGetUserEcosystemPointRequest {
  // The off chain account id
  account_id?: string
  // Start time of the epoch - phase
  calculate_from?: bigint
  // Include user rank in the response
  include_user_rank?: boolean
}

export interface IApiGetUserEcosystemPointResponse {
  // The list of ecosystem points
  points?: IEcosystemPoint[]
}

// The request to get the latest snapshot of list sub account
//
export interface IApiLatestSnapSubAccountsRequest {
  // The list of sub account ids to query
  sub_account_i_ds?: bigint[]
}

export interface IApiLatestSnapSubAccountsResponse {
  // The sub account history matching the request sub account
  results?: ISubAccount[]
}

// Retrieves a single mini ticker value for a single instrument. Please do not use this to repeatedly poll for data -- a websocket subscription is much more performant, and useful.
export interface IApiMiniTickerRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
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
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be returned
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
}

// Retrieves all open orders for the account. This may not match new orders in flight.
export interface IApiOpenOrdersResponse {
  // The Open Orders matching the request filter
  orders?: IOrder[]
}

// Retrieves the order history for the account.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiOrderHistoryRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be returned
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // The start time to apply in nanoseconds. If nil, this defaults to all start times. Otherwise, only entries matching the filter will be returned
  start_time?: bigint
  // The end time to apply in nanoseconds. If nil, this defaults to all end times. Otherwise, only entries matching the filter will be returned
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiOrderHistoryResponse {
  // The Open Orders matching the request filter
  orders?: IOrder[]
  // The cursor to indicate when to start the query from
  next?: string
}

// Retrieve the order state for the account. Either `order_id` or `client_order_id` must be provided.
export interface IApiOrderStateRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // Filter for `order_id`
  order_id?: bigint
  // Filter for `client_order_id`
  client_order_id?: bigint
}

export interface IApiOrderStateResponse {
  // The order state for the requested filter
  state?: IOrderState
}

// Retrieves aggregated price depth for a single instrument, with a maximum depth of 10 levels. Do not use this to poll for data -- a websocket subscription is much more performant, and useful.
export interface IApiOrderbookLevelsRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // Depth of the order book to be retrieved (10, 40, 200, 500)
  depth?: number
  // The number of levels to aggregate into one level (1 = no aggregation, 10/100/1000 = aggregate 10/100/1000 levels into 1)
  aggregate?: number
}

export interface IApiOrderbookLevelsResponse {
  // The orderbook levels objects matching the request asset
  results?: IOrderbookLevels
}

// Query the positions of a sub account
export interface IApiPositionsRequest {
  // The sub account ID to request for
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be returned
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
}

export interface IApiPositionsResponse {
  // The positions matching the request filter
  results?: IPositions[]
}

// Query for all historical trades made by a single account. A single order can be matched multiple times, hence there is no real way to uniquely identify a trade.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiPrivateTradeHistoryRequest {
  // The sub account ID to request for
  sub_account_id?: bigint
  // The kind filter to apply. If nil, this defaults to all kinds. Otherwise, only entries matching the filter will be returned
  kind?: EKind[]
  // The base filter to apply. If nil, this defaults to all bases. Otherwise, only entries matching the filter will be returned
  base?: ECurrency[]
  // The quote filter to apply. If nil, this defaults to all quotes. Otherwise, only entries matching the filter will be returned
  quote?: ECurrency[]
  // The start time to apply in unix nanoseconds. If nil, this defaults to all start times. Otherwise, only entries matching the filter will be returned
  start_time?: bigint
  // The end time to apply in unix nanoseconds. If nil, this defaults to all end times. Otherwise, only entries matching the filter will be returned
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiPrivateTradeHistoryResponse {
  // The private trades matching the request asset
  results?: IPrivateTrade[]
  // The cursor to indicate when to start the query from
  next?: string
}

// Perform historical lookup of public trades in any given instrument.
// This endpoint offers public trading data, use the Trading APIs instead to query for your personalized trade tape.
// Only data from the last three months will be retained.
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiPublicTradeHistoryRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The start time to apply in nanoseconds. If nil, this defaults to all start times. Otherwise, only entries matching the filter will be returned
  start_time?: bigint
  // The end time to apply in nanoseconds. If nil, this defaults to all end times. Otherwise, only entries matching the filter will be returned
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiPublicTradeHistoryResponse {
  // The public trades matching the request asset
  results?: IPublicTrade[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// Retrieves up to 1000 of the most recent public trades in any given instrument. Do not use this to poll for data -- a websocket subscription is much more performant, and useful.
// This endpoint offers public trading data, use the Trading APIs instead to query for your personalized trade tape.
export interface IApiPublicTradesRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
}

export interface IApiPublicTradesResponse {
  // The public trades matching the request asset
  results?: IPublicTrade[]
}

export interface IApiResolveEpochEcosystemMetricResponse {
  // The name of the epoch
  epoch_name?: string
  // Ecosystem points up to the most recently calculated time within this epoch
  point?: number
  // The time in unix nanoseconds when the ecosystem points were last calculated
  last_calculated_time?: bigint
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
  start_time?: bigint
  // End time of settlement price in unix nanoseconds
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the query from
  cursor?: string
}

export interface IApiSettlementPriceResponse {
  // The funding rate result set for given interval
  results?: IAPISettlementPrice[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// The request to get the history of a sub account
// SubAccount Summary values are snapshotted once every hour
// No snapshots are taken if the sub account has no activity in the hourly window
// History is preserved only for the last 30 days
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiSubAccountHistoryRequest {
  // The sub account ID to request for
  sub_account_id?: bigint
  // Start time of sub account history in unix nanoseconds
  start_time?: bigint
  // End time of sub account history in unix nanoseconds
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the next query from
  cursor?: string
}

export interface IApiSubAccountHistoryResponse {
  // The sub account history matching the request sub account
  results?: ISubAccount[]
  // The cursor to indicate when to start the next query from
  next?: string
}

export interface IApiSubAccountSummaryRequest {
  // The subaccount ID to filter by
  sub_account_id?: bigint
}

// Query for sub-account details, including base currency balance, all derivative positions, margin levels, and P&L.
export interface IApiSubAccountSummaryResponse {
  // The sub account matching the request sub account
  results?: ISubAccount
}

// startTime are optional parameters. The semantics of these parameters are as follows:<ul>
export interface IApiSubAccountTradeAggregationRequest {
  // Optional. The limit of the number of results to return
  limit?: number
  // The interval of each sub account trade
  interval?: ESubAccountTradeInterval
  // The list of sub account ids to query
  sub_account_i_ds?: bigint[]
  // The sub account id to query greater than
  sub_account_id_greater_than?: bigint
  // Optional. The starting time in unix nanoseconds of a specific interval to query
  start_interval?: bigint
  // Optional. Start time in unix nanoseconds
  start_time?: bigint
  // Optional. End time in unix nanoseconds
  end_time?: bigint
  // The cursor to indicate when to start the next query from
  cursor?: string
}

export interface IApiSubAccountTradeAggregationResponse {
  // The sub account trade aggregation result set for given interval
  results?: ISubAccountTradeAggregation[]
  // The cursor to indicate when to start the next query from
  next?: string
}

// startTime are optional parameters. The semantics of these parameters are as follows:<ul>
export interface IApiSubAccountTradeRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The interval of each sub account trade
  interval?: ESubAccountTradeInterval
  // The list of sub account ids to query
  sub_account_i_ds?: bigint[]
  // Optional. The starting time in unix nanoseconds of a specific interval to query
  start_interval?: bigint
  // Optional. Start time in unix nanoseconds
  start_time?: bigint
  // Optional. End time in unix nanoseconds
  end_time?: bigint
}

export interface IApiSubAccountTradeResponse {
  // The sub account trade result set for given interval
  results?: ISubAccountTrade[]
}

export interface IApiTickerFeedDataV1 {
  // The mini ticker matching the request asset
  results?: ITicker
}

// Retrieves a single ticker value for a single instrument. Please do not use this to repeatedly poll for data -- a websocket subscription is much more performant, and useful.
export interface IApiTickerRequest {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
}

export interface IApiTickerResponse {
  // The mini ticker matching the request asset
  results?: ITicker
}

// The request to get the historical transfers of an account
// The history is returned in reverse chronological order
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiTransferHistoryRequest {
  // The token currency to query for, if nil or empty, return all transfers. Otherwise, only entries matching the filter will be returned
  token_currency?: ECurrency[]
  // The start time to query for in unix nanoseconds
  start_time?: bigint
  // The end time to query for in unix nanoseconds
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the next query from
  cursor?: string
}

export interface IApiTransferHistoryResponse {
  // The transfer history matching the request account
  results?: ITransferHistory[]
  // The cursor to indicate when to start the next query from
  next?: string
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
  num_tokens?: string
  // The signature of the transfer
  signature?: ISignature
}

// The request to get the historical withdrawals of an account
// The history is returned in reverse chronological order
//
// Pagination works as follows:<ul><li>We perform a reverse chronological lookup, starting from `end_time`. If `end_time` is not set, we start from the most recent data.</li><li>The lookup is limited to `limit` records. If more data is requested, the response will contain a `next` cursor for you to query the next page.</li><li>If a `cursor` is provided, it will be used to fetch results from that point onwards.</li><li>Pagination will continue until the `start_time` is reached. If `start_time` is not set, pagination will continue as far back as our data retention policy allows.</li></ul>
export interface IApiWithdrawalHistoryRequest {
  // The token currency to query for, if nil or empty, return all withdrawals. Otherwise, only entries matching the filter will be returned
  token_currency?: ECurrency[]
  // The start time to query for in unix nanoseconds
  start_time?: bigint
  // The end time to query for in unix nanoseconds
  end_time?: bigint
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
  // The cursor to indicate when to start the next query from
  cursor?: string
}

export interface IApiWithdrawalHistoryResponse {
  // The withdrawals history matching the request account
  results?: IWithdrawalHistory[]
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
  from_account_id?: bigint
  // The Ethereum wallet to withdraw into
  to_eth_address?: bigint
  // The token currency to withdraw
  token_currency?: ECurrency
  // The number of tokens to withdraw, quoted in tokenCurrency decimal units
  num_tokens?: string
  // The signature of the withdrawal
  signature?: ISignature
}

export interface ICandlestick {
  // Open time of kline bar in unix nanoseconds
  open_time?: bigint
  // Close time of kline bar in unix nanosecond
  close_time?: bigint
  // The open price, expressed in underlying currency resolution units
  open?: string
  // The close price, expressed in underlying currency resolution units
  close?: string
  // The high price, expressed in underlying currency resolution units
  high?: string
  // The low price, expressed in underlying currency resolution units
  low?: string
  // The underlying volume transacted, expressed in base asset decimal units
  volume_u?: string
  // The quote volume transacted, expressed in quote asset decimal units
  volume_q?: string
  // The number of trades transacted
  trades?: number
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
}

export interface IDeposit {
  // The hash of the bridgemint event producing the deposit
  tx_hash?: bigint
  // The account to deposit into
  to_account_id?: bigint
  // The token currency to deposit
  token_currency?: ECurrency
  // The number of tokens to deposit
  num_tokens?: string
}

export interface IDepositHistory {
  // The transaction ID of the deposit
  tx_id?: bigint
  // The txHash of the bridgemint event
  tx_hash?: bigint
  // The account to deposit into
  to_account_id?: bigint
  // The token currency to deposit
  token_currency?: ECurrency
  // The number of tokens to deposit
  num_tokens?: string
  // The timestamp of the deposit in unix nanoseconds
  event_time?: bigint
}

export interface IEcosystemLeaderboardUser {
  // The off chain account id
  account_id?: string
  // The rank of the account in the ecosystem
  rank?: number
  // Total ecosystem point
  total_point?: bigint
  // The twitter username of the account
  twitter_username?: string
}

export interface IEcosystemMetric {
  // Direct invite count
  direct_invite_count?: number
  // Indirect invite count
  indirect_invite_count?: number
  // Direct invite trading volume
  direct_invite_trading_volume?: bigint
  // Indirect invite trading volume
  indirect_invite_trading_volume?: bigint
  // Total ecosystem point of this epoch/phase
  total_point?: bigint
}

export interface IEcosystemPoint {
  // The off chain account id
  account_id?: string
  // The main account id
  main_account_id?: bigint
  // Total ecosystem point
  total_point?: bigint
  // Direct invite count
  direct_invite_count?: number
  // Indirect invite count
  indirect_invite_count?: number
  // Direct invite trading volume
  direct_invite_trading_volume?: bigint
  // Indirect invite trading volume
  indirect_invite_trading_volume?: bigint
  // The time when the ecosystem point is calculated
  calculate_at?: bigint
  // Start time of the epoch - phase
  calculate_from?: bigint
  // End time of the epoch - phase
  calculate_to?: bigint
  // The rank of the account in the ecosystem
  rank?: number
}

export interface IFlatReferral {
  // The off chain account id
  account_id?: string
  // The off chain referrer account id
  referrer_id?: string
  // The referrer level; 1: direct referrer, 2: indirect referrer
  referrer_level?: number
  // The account creation time
  account_create_time?: bigint
  // The main account id
  main_account_id?: bigint
  // The referrer main account id
  referrer_main_account_id?: bigint
}

export interface IFundingRate {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The funding rate of the instrument, expressed in centibeeps
  funding_rate?: number
  // The funding timestamp of the funding rate, expressed in unix nanoseconds
  funding_time?: bigint
  // The mark price of the instrument at funding timestamp, expressed in `9` decimals
  mark_price?: bigint
}

export interface IInstrument {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The asset ID used for instrument signing.
  asset_id?: bigint
  // The base currency
  base?: ECurrency
  // The quote currency
  quote?: ECurrency
  // The kind of instrument
  kind?: EKind
  // The expiry time of the instrument in unix nanoseconds
  expiry?: bigint
  // The strike price of the instrument, expressed in `9` decimals
  strike_price?: string
  // Venues that this instrument can be traded at
  venues?: EVenue[]
  // The settlement period of the instrument
  settlement_period?: EInstrumentSettlementPeriod
  // The smallest denomination of the base asset supported by GRVT (+3 represents 0.001, -3 represents 1000, 0 represents 1)
  underlying_decimals?: number
  // The smallest denomination of the quote asset supported by GRVT (+3 represents 0.001, -3 represents 1000, 0 represents 1)
  quote_decimals?: number
  // The size of a single tick, expressed in quote asset decimal units
  tick_size?: string
  // The minimum contract size, expressed in base asset decimal units
  min_size?: string
  // The minimum block trade size, expressed in base asset decimal units
  min_block_trade_size?: string
  // Creation time in unix nanoseconds
  create_time?: bigint
}

export interface ILPPoint {
  // The main account id
  main_account_id?: bigint
  // The LP Asset
  lp_asset?: bigint
  // Start time of the epoch - phase
  start_interval?: bigint
  // Liquidty score
  liquidity_score?: bigint
  // The rank of user in the LP leaderboard
  rank?: number
}

export interface ILPSnapshot {
  // The main account id
  main_account_id?: bigint
  // The LP Asset
  lp_asset?: bigint
  // Underlying multiplier
  underlying_multiplier?: bigint
  // Market share multiplier
  market_share_multiplier?: bigint
  // Fast market multiplier
  bid_fast_market_multiplier?: number
  // Fast market multiplier
  ask_fast_market_multiplier?: number
  // Liquidty score
  liquidity_score?: bigint
  // The time when the snapshot was calculated
  calculate_at?: bigint
}

export interface IMiniTicker {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
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
  client_order_id?: bigint
  // [Filled by GRVT Backend] Time at which the order was received by GRVT in unix nanoseconds
  create_time?: bigint
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
  update_time?: bigint
}

export interface IOrderStateFeed {
  // A unique 128-bit identifier for the order, deterministically generated within the GRVT backend
  order_id?: bigint
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
  event_time?: bigint
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
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
  // A trade identifier
  trade_id?: bigint
  // An order identifier
  order_id?: bigint
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
  client_order_id?: bigint
  // A trade index
  trade_index?: number
}

// All private RFQs and Private AXEs will be filtered out from the responses
export interface IPublicTrade {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
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
  // A trade identifier
  trade_id?: bigint
  // The venue where the trade occurred
  venue?: EVenue
  // If the trade was a liquidation
  is_liquidation?: boolean
  // A trade index
  trade_index?: number
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
  // This currency's balance in this trading account.
  balance?: string
  // The index price of this currency. (reported in `USD`)
  index_price?: string
}

export interface ISubAccount {
  // Time at which the event was emitted in unix nanoseconds
  event_time?: bigint
  // The sub account ID this entry refers to
  sub_account_id?: bigint
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

export interface ISubAccountTrade {
  // Start of calculation epoch
  start_interval?: bigint
  // The sub account id
  sub_account_id?: bigint
  // The instrument being represented
  instrument?: string
  // Total fee paid
  total_fee?: bigint
  // Total volume traded
  total_trade_volume?: bigint
}

// Similar to sub-account trade, but not divided by individual assets.
export interface ISubAccountTradeAggregation {
  // The sub account id
  sub_account_id?: bigint
  // Total fee paid
  total_fee?: bigint
  // Total volume traded
  total_trade_volume?: bigint
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
  // The current funding rate of the instrument, expressed in centibeeps (1/100th of a basis point)
  funding_rate_8_h_curr?: string
  // The average funding rate of the instrument (over last 8h), expressed in centibeeps (1/100th of a basis point)
  funding_rate_8_h_avg?: string
  // The interest rate of the underlying, expressed in centibeeps (1/100th of a basis point)
  interest_rate?: string
  // [Options] The forward price of the option, expressed in `9` decimals
  forward_price?: string
  // The 24 hour taker buy volume of the instrument, expressed in base asset decimal units
  buy_volume_24_h_u?: string
  // The 24 hour taker sell volume of the instrument, expressed in base asset decimal units
  sell_volume_24_h_u?: string
  // The 24 hour taker buy volume of the instrument, expressed in quote asset decimal units
  buy_volume_24_h_q?: string
  // The 24 hour taker sell volume of the instrument, expressed in quote asset decimal units
  sell_volume_24_h_q?: string
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

export interface ITraderLeaderboardUser {
  // The off chain account id
  account_id?: string
  // The rank of the account in the Trader
  rank?: number
  // Total Trader point
  total_point?: bigint
  // The twitter username of the account
  twitter_username?: string
}

export interface ITraderMetric {
  // Total fee paid
  total_fee?: bigint
  // Total trader point of this epoch/phase
  total_point?: bigint
}

export interface ITransfer {
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
  num_tokens?: string
  // The signature of the transfer
  signature?: ISignature
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
  num_tokens?: string
  // The signature of the transfer
  signature?: ISignature
  // The timestamp of the transfer in unix nanoseconds
  event_time?: bigint
}

export interface IWSCandlestickFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A candlestick entry matching the request filters
  feed?: ICandlestick
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
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // The Deposit object
  feed?: IDeposit
}

export interface IWSMiniTickerFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A mini ticker matching the request filter
  feed?: IMiniTicker
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
  // Delta (0, 40, 100, 200, 500, 1000, 5000)
  // Snapshot (200, 500, 1000, 5000)
  rate?: number
}

export interface IWSOrderFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // The order object being created or updated
  feed?: IOrder
}

// Subscribes to a feed of order updates pertaining to orders made by your account.
// Each Order can be uniquely identified by its `order_id` or `client_order_id` (if client designs well).
// Use `stateFilter = c` to only receive create events, `stateFilter = u` to only receive update events, and `stateFilter = a` to receive both.
export interface IWSOrderFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply.
  kind?: EKind
  // The base filter to apply.
  base?: ECurrency
  // The quote filter to apply.
  quote?: ECurrency
  // create only, update only, all
  state_filter?: EOrderStateFilter
}

export interface IWSOrderStateFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // The Order State Feed
  feed?: IOrderStateFeed
}

// Subscribes to a feed of order updates pertaining to orders made by your account.
// Unlike the Order Stream, this only streams state updates, drastically improving throughput, and latency.
// Each Order can be uniquely identified by its `order_id` or `client_order_id` (if client designs well).
// Use `stateFilter = c` to only receive create events, `stateFilter = u` to only receive update events, and `stateFilter = a` to receive both.
export interface IWSOrderStateFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply.
  kind?: EKind
  // The base filter to apply.
  base?: ECurrency
  // The quote filter to apply.
  quote?: ECurrency
  // create only, update only, all
  state_filter?: EOrderStateFilter
}

export interface IWSOrderbookLevelsFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // An orderbook levels object matching the request filter
  feed?: IOrderbookLevels
}

// Subscribes to aggregated orderbook updates for a single instrument. The `book.s` channel offers simpler integration. To experience higher publishing rates, please use the `book.d` channel.
// Unlike the `book.d` channel which publishes an initial snapshot, then only streams deltas after, the `book.s` channel publishes full snapshots at each feed.
//
// The Delta feed will work as follows:<ul><li>On subscription, the server will send a full snapshot of all levels of the Orderbook.</li><li>After the snapshot, the server will only send levels that have changed in value.</li></ul>
//
// Field Semantics:<ul><li>[DeltaOnly] If a level is not updated, level not published</li><li>If a level is updated, {size: '123'}</li><li>If a level is set to zero, {size: '0'}</li><li>Incoming levels will be published as soon as price moves</li><li>Outgoing levels will be published with `size = 0`</li></ul>
export interface IWSOrderbookLevelsFeedSelectorV1 {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The minimal rate at which we publish feeds (in milliseconds)
  // Delta (40, 100, 200, 500, 1000, 5000)
  // Snapshot (500, 1000, 5000)
  rate?: number
  // Depth of the order book to be retrieved (10, 40, 200, 500)
  depth?: number
  // The number of levels to aggregate into one level (1 = no aggregation, 10/100/1000 = aggregate 10/100/1000 levels into 1)
  aggregate?: number
}

export interface IWSPositionsFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A Position being created or updated matching the request filter
  feed?: IPositions
}

// Subscribes to a feed of position updates. This happens when a trade is executed.
export interface IWSPositionsFeedSelectorV1 {
  // The subaccount ID to filter by
  sub_account_id?: bigint
  // The kind filter to apply.
  kind?: EKind
  // The base filter to apply.
  base?: ECurrency
  // The quote filter to apply.
  quote?: ECurrency
}

export interface IWSPrivateTradeFeedDataV1 {
  // The websocket channel to which the response is sent
  stream?: string
  // Primary selector
  selector?: string
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
  // The base filter to apply.
  base?: ECurrency
  // The quote filter to apply.
  quote?: ECurrency
}

export interface IWSPublicTradesFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A public trade matching the request filter
  feed?: IPublicTrade
}

// Subscribes to a stream of Public Trades for an instrument.
export interface IWSPublicTradesFeedSelectorV1 {
  // The readable instrument name:<ul><li>Perpetual: `ETH_USDT_Perp`</li><li>Future: `BTC_USDT_Fut_20Oct23`</li><li>Call: `ETH_USDT_Call_20Oct23_2800`</li><li>Put: `ETH_USDT_Put_20Oct23_2800`</li></ul>
  instrument?: string
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
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

export interface IWSTickerFeedDataV1 {
  // Stream name
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // A ticker matching the request filter
  feed?: ITicker
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

// Subscribes to a feed of transfer updates.
export interface IWSTransferFeedDataV1 {
  // The websocket channel to which the response is sent
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // The Transfer object
  feed?: ITransfer
}

// Subscribes to a feed of withdrawal updates.
export interface IWSWithdrawalFeedDataV1 {
  // The websocket channel to which the response is sent
  stream?: string
  // Primary selector
  selector?: string
  // A running sequence number that determines global message order within the specific stream
  sequence_number?: bigint
  // The Withdrawal object
  feed?: IWithdrawal
}

export interface IWithdrawal {
  // The subaccount to withdraw from
  from_account_id?: bigint
  // The ethereum address to withdraw to
  to_eth_address?: bigint
  // The token currency to withdraw
  token_currency?: ECurrency
  // The number of tokens to withdraw
  num_tokens?: string
  // The signature of the withdrawal
  signature?: ISignature
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
  num_tokens?: string
  // The signature of the withdrawal
  signature?: ISignature
  // The timestamp of the withdrawal in unix nanoseconds
  event_time?: bigint
}
