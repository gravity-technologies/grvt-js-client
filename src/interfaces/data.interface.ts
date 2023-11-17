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

// Fetch a single instrument by supplying the asset or instrument name
export interface IApiGetInstrumentRequest {
  // The asset used throughout all APIs as an instrument identifier
  asset?: IAsset
  // The readable name of the instrument
  instrument_name?: string
}

export interface IApiGetInstrumentResponse {
  // Requested Instrument
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
  // List of Instruments
  results?: IInstrument[]
}

export interface IApiMiniTickerResponse {
  // The ticker described in the payload
  results?: IMiniTicker[]
}

export interface IApiOrderbookLevelsResponse {
  // The list of orderbook levels described in the payload
  results?: IOrderbookLevels
}

export interface IApiRecentTradeRequest {
  // The asset being represented
  asset?: IAsset
  // The limit to query for. Defaults to 500; Max 1000
  limit?: number
}

export interface IApiRecentTradeResponse {
  // List of recent trades described in the payload
  results?: IPublicTrade[]
}

export interface IApiTickerRequest {
  // The asset being represented
  asset?: IAsset
  // Boolean flag to specify if Greeks are required
  greeks?: boolean
}

export interface IApiTickerResponse {
  // The ticker described in the payload
  results?: ITicker
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
  // The ticker described in the feed
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
  // The orderbook levels described in the feed
  f?: IOrderbookLevels
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
  // Recent trades feed described in the feed
  f?: IPublicTrade
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
  // The ticker described in the feed
  f?: ITicker
}
