/**
 * Place to define all the schema maps for lite/full APIs request/response.
 */

interface SchemaMap {
  [key: string]: string | Array<string | SchemaMap>
}

interface SchemaPairMap {
  FULL_TO_LITE: SchemaMap
  LITE_TO_FULL: SchemaMap
}

// Schema map for the 'ASSET' struct.
export const ASSET_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    expiration: 'e',
    strike_price: 's'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    e: 'expiration',
    s: 'strike_price'
  }
})

// Schema map for the 'GREEKS' struct.
export const GREEKS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    underlying_price: 'up',
    risk_free_rate: 'rf',
    delta: 'd',
    gamma: 'g',
    iv: 'i',
    vega: 'v',
    volga: 'v1',
    vanna: 'v2',
    theta: 't',
    rho: 'r'
  },
  LITE_TO_FULL: {
    up: 'underlying_price',
    rf: 'risk_free_rate',
    d: 'delta',
    g: 'gamma',
    i: 'iv',
    v: 'vega',
    v1: 'volga',
    v2: 'vanna',
    t: 'theta',
    r: 'rho'
  }
})

// Schema map for the 'TICKER' struct.
export const TICKER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    mark_price: 'mp',
    index_price: 'ip',
    last_price: 'lp',
    last_size: 'ls',
    mid_price: 'mp1',
    best_bid_price: 'bb',
    best_bid_size: 'bb1',
    best_bid_num_orders: 'bb2',
    best_ask_price: 'ba',
    best_ask_size: 'ba1',
    best_ask_num_orders: 'ba2',
    volume: 'v',
    volume_change: 'vc',
    quote_volume: 'qv',
    quote_volume_change: 'qv1',
    taker_buy_trades: 'tb',
    taker_buy_trades_change: 'tb1',
    maker_buy_trades: 'mb',
    maker_buy_trades_change: 'mb1',
    high_price: 'hp',
    low_price: 'lp1',
    next_funding_rate: 'nf',
    next_funding_at: 'nf1',
    open_interest: 'oi',
    num_trades: 'nt',
    num_trades_change: 'nt1',
    taker_buy_sell_ratio: 'tb2',
    taker_buy_sell_ratio_change: 'tb3',
    avg_price: 'ap',
    avg_price_change: 'ap1',
    avg_volume: 'av',
    avg_volume_change: 'av1',
    greeks: ['g', GREEKS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    mp: 'mark_price',
    ip: 'index_price',
    lp: 'last_price',
    ls: 'last_size',
    mp1: 'mid_price',
    bb: 'best_bid_price',
    bb1: 'best_bid_size',
    bb2: 'best_bid_num_orders',
    ba: 'best_ask_price',
    ba1: 'best_ask_size',
    ba2: 'best_ask_num_orders',
    v: 'volume',
    vc: 'volume_change',
    qv: 'quote_volume',
    qv1: 'quote_volume_change',
    tb: 'taker_buy_trades',
    tb1: 'taker_buy_trades_change',
    mb: 'maker_buy_trades',
    mb1: 'maker_buy_trades_change',
    hp: 'high_price',
    lp1: 'low_price',
    nf: 'next_funding_rate',
    nf1: 'next_funding_at',
    oi: 'open_interest',
    nt: 'num_trades',
    nt1: 'num_trades_change',
    tb2: 'taker_buy_sell_ratio',
    tb3: 'taker_buy_sell_ratio_change',
    ap: 'avg_price',
    ap1: 'avg_price_change',
    av: 'avg_volume',
    av1: 'avg_volume_change',
    g: ['greeks', GREEKS_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'ORDERBOOK_LEVELS' struct.
export const ORDERBOOK_LEVELS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    bids: 'b',
    asks: 'a1'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    b: 'bids',
    a1: 'asks'
  }
})

// Schema map for the 'INSTRUMENT' struct.
export const INSTRUMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    instrument_name: 'in',
    venues: 'v',
    settlement_period: 'sp',
    underlying_decimals: 'ud',
    quote_decimals: 'qd',
    tick_size: 'ts',
    min_size: 'ms',
    min_block_trade_size: 'mb',
    create_time: 'ct'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    in: 'instrument_name',
    v: 'venues',
    sp: 'settlement_period',
    ud: 'underlying_decimals',
    qd: 'quote_decimals',
    ts: 'tick_size',
    ms: 'min_size',
    mb: 'min_block_trade_size',
    ct: 'create_time'
  }
})

// Schema map for the 'API_MINI_TICKER_REQUEST' struct.
export const API_MINI_TICKER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_ORDERBOOK_LEVELS_REQUEST' struct.
export const API_ORDERBOOK_LEVELS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    depth: 'd',
    aggregate: 'a1'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    d: 'depth',
    a1: 'aggregate'
  }
})

// Schema map for the 'API_GET_INSTRUMENT_REQUEST' struct.
export const API_GET_INSTRUMENT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    instrument_name: 'in'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    in: 'instrument_name'
  }
})

// Schema map for the 'API_GET_INSTRUMENT_RESPONSE' struct.
export const API_GET_INSTRUMENT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', INSTRUMENT_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['results', INSTRUMENT_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_GET_INSTRUMENTS_REQUEST' struct.
export const API_GET_INSTRUMENTS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    is_active: 'ia',
    limit: 'l'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    ia: 'is_active',
    l: 'limit'
  }
})

// Schema map for the 'API_GET_INSTRUMENTS_RESPONSE' struct.
export const API_GET_INSTRUMENTS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: 'r'
  },
  LITE_TO_FULL: {
    r: 'results'
  }
})

// Schema map for the 'API_MINI_TICKER_RESPONSE' struct.
export const API_MINI_TICKER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: 'r'
  },
  LITE_TO_FULL: {
    r: 'results'
  }
})

// Schema map for the 'API_ORDERBOOK_LEVELS_RESPONSE' struct.
export const API_ORDERBOOK_LEVELS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', ORDERBOOK_LEVELS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['results', ORDERBOOK_LEVELS_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_RECENT_TRADE_REQUEST' struct.
export const API_RECENT_TRADE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    limit: 'l'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    l: 'limit'
  }
})

// Schema map for the 'API_RECENT_TRADE_RESPONSE' struct.
export const API_RECENT_TRADE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: 'r'
  },
  LITE_TO_FULL: {
    r: 'results'
  }
})

// Schema map for the 'API_TICKER_REQUEST' struct.
export const API_TICKER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    greeks: 'g'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    g: 'greeks'
  }
})

// Schema map for the 'API_TICKER_RESPONSE' struct.
export const API_TICKER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['results', TICKER_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'MINI_TICKER' struct.
export const MINI_TICKER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    mark_price: 'mp',
    index_price: 'ip',
    last_price: 'lp',
    last_size: 'ls',
    mid_price: 'mp1',
    best_bid_price: 'bb',
    best_bid_size: 'bb1',
    best_bid_num_orders: 'bb2',
    best_ask_price: 'ba',
    best_ask_size: 'ba1',
    best_ask_num_orders: 'ba2'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    mp: 'mark_price',
    ip: 'index_price',
    lp: 'last_price',
    ls: 'last_size',
    mp1: 'mid_price',
    bb: 'best_bid_price',
    bb1: 'best_bid_size',
    bb2: 'best_bid_num_orders',
    ba: 'best_ask_price',
    ba1: 'best_ask_size',
    ba2: 'best_ask_num_orders'
  }
})

// Schema map for the 'ORDERBOOK_LEVEL' struct.
export const ORDERBOOK_LEVEL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    price: 'p',
    size: 's',
    num_orders: 'no'
  },
  LITE_TO_FULL: {
    p: 'price',
    s: 'size',
    no: 'num_orders'
  }
})

// Schema map for the 'PUBLIC_TRADE' struct.
export const PUBLIC_TRADE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    is_taker_buyer: 'it',
    size: 's',
    price: 'p',
    mark_price: 'mp',
    trade_id: 'ti',
    venue: 'v',
    greeks: ['g', GREEKS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    it: 'is_taker_buyer',
    s: 'size',
    p: 'price',
    mp: 'mark_price',
    ti: 'trade_id',
    v: 'venue',
    g: ['greeks', GREEKS_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'WS_MINI_TICKER_REQUEST' struct.
export const WS_MINI_TICKER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    rate: 'r'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    r: 'rate'
  }
})

// Schema map for the 'WS_MINI_TICKER_RESPONSE' struct.
export const WS_MINI_TICKER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', MINI_TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', MINI_TICKER_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'WS_ORDERBOOK_LEVELS_REQUEST' struct.
export const WS_ORDERBOOK_LEVELS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    rate: 'r',
    depth: 'd',
    aggregate: 'a'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    r: 'rate',
    d: 'depth',
    a: 'aggregate'
  }
})

// Schema map for the 'WS_ORDERBOOK_LEVELS_RESPONSE' struct.
export const WS_ORDERBOOK_LEVELS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', ORDERBOOK_LEVELS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', ORDERBOOK_LEVELS_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'WS_RECENT_TRADE_REQUEST' struct.
export const WS_RECENT_TRADE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    venue: 'v',
    limit: 'l'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    v: 'venue',
    l: 'limit'
  }
})

// Schema map for the 'WS_RECENT_TRADE_RESPONSE' struct.
export const WS_RECENT_TRADE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', PUBLIC_TRADE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', PUBLIC_TRADE_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'WS_TICKER_REQUEST' struct.
export const WS_TICKER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    rate: 'r',
    greeks: 'g'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    r: 'rate',
    g: 'greeks'
  }
})

// Schema map for the 'WS_TICKER_RESPONSE' struct.
export const WS_TICKER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', TICKER_MAP.LITE_TO_FULL]
  }
})
