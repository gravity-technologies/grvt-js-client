/* eslint-disable @typescript-eslint/no-use-before-define */

export interface SchemaMap {
  [key: string]: string | Array<string | SchemaMap | SchemaMap[] | SchemaMap[][]>
}

export interface SchemaPairMap {
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

// Schema map for the 'SIGNATURE' struct.
export const SIGNATURE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    signer: 's',
    r: 'r',
    s: 's1',
    v: 'v',
    expiration: 'e',
    nonce: 'n'
  },
  LITE_TO_FULL: {
    s: 'signer',
    r: 'r',
    s1: 's',
    v: 'v',
    e: 'expiration',
    n: 'nonce'
  }
})

// Schema map for the 'ORDER_STATE' struct.
export const ORDER_STATE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    status: 's',
    reject_reason: 'rr',
    book_size: 'bs',
    traded_size: 'ts',
    update_time: 'ut'
  },
  LITE_TO_FULL: {
    s: 'status',
    rr: 'reject_reason',
    bs: 'book_size',
    ts: 'traded_size',
    ut: 'update_time'
  }
})

// Schema map for the 'ORDER_METADATA' struct.
export const ORDER_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    client_order_id: 'co',
    take_profit_trigger_condition: 'tp',
    stop_loss_trigger_condition: 'sl',
    take_profit_trigger_price: 'tp1',
    stop_loss_trigger_price: 'sl1',
    create_time: 'ct'
  },
  LITE_TO_FULL: {
    co: 'client_order_id',
    tp: 'take_profit_trigger_condition',
    sl: 'stop_loss_trigger_condition',
    tp1: 'take_profit_trigger_price',
    sl1: 'stop_loss_trigger_price',
    ct: 'create_time'
  }
})

// Schema map for the 'ORDER_LEG' struct.
export const ORDER_LEG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    size: 's',
    limit_price: 'lp',
    oco_limit_price: 'ol',
    is_buying_asset: 'ib'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    s: 'size',
    lp: 'limit_price',
    ol: 'oco_limit_price',
    ib: 'is_buying_asset'
  }
})

// Schema map for the 'ORDER' struct.
export const ORDER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    order_id: 'oi',
    sub_account_id: 'sa',
    is_market: 'im',
    time_in_force: 'ti',
    limit_price: 'lp',
    oco_limit_price: 'ol',
    taker_fee_percentage_cap: 'tf',
    maker_fee_percentage_cap: 'mf',
    post_only: 'po',
    reduce_only: 'ro',
    is_paying_base_currency: 'ip',
    legs: ['l', [ORDER_LEG_MAP.FULL_TO_LITE]],
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE],
    metadata: ['m', ORDER_METADATA_MAP.FULL_TO_LITE],
    state: ['s1', ORDER_STATE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    oi: 'order_id',
    sa: 'sub_account_id',
    im: 'is_market',
    ti: 'time_in_force',
    lp: 'limit_price',
    ol: 'oco_limit_price',
    tf: 'taker_fee_percentage_cap',
    mf: 'maker_fee_percentage_cap',
    po: 'post_only',
    ro: 'reduce_only',
    ip: 'is_paying_base_currency',
    l: ['legs', [ORDER_LEG_MAP.LITE_TO_FULL]],
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL],
    m: ['metadata', ORDER_METADATA_MAP.LITE_TO_FULL],
    s1: ['state', ORDER_STATE_MAP.LITE_TO_FULL]
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

// Schema map for the 'ORDERBOOK_LEVELS' struct.
export const ORDERBOOK_LEVELS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    bids: ['b', [ORDERBOOK_LEVEL_MAP.FULL_TO_LITE]],
    asks: ['a1', [ORDERBOOK_LEVEL_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    b: ['bids', [ORDERBOOK_LEVEL_MAP.LITE_TO_FULL]],
    a1: ['asks', [ORDERBOOK_LEVEL_MAP.LITE_TO_FULL]]
  }
})

// Schema map for the 'POSITIONS' struct.
export const POSITIONS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    balance: 'b',
    value: 'v',
    entry_price: 'ep',
    exit_price: 'ep1',
    mark_price: 'mp',
    unrealized_pnl: 'up',
    realized_pnl: 'rp',
    pnl: 'p',
    roi: 'r'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    b: 'balance',
    v: 'value',
    ep: 'entry_price',
    ep1: 'exit_price',
    mp: 'mark_price',
    up: 'unrealized_pnl',
    rp: 'realized_pnl',
    p: 'pnl',
    r: 'roi'
  }
})

// Schema map for the 'PRIVATE_TRADE' struct.
export const PRIVATE_TRADE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    is_buyer: 'ib',
    is_taker: 'it',
    size: 's',
    price: 'p',
    mark_price: 'mp',
    realized_pnl: 'rp',
    fee: 'f',
    fee_rate: 'fr',
    trade_id: 'ti',
    order_id: 'oi',
    venue: 'v',
    greeks: ['g', GREEKS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    ib: 'is_buyer',
    it: 'is_taker',
    s: 'size',
    p: 'price',
    mp: 'mark_price',
    rp: 'realized_pnl',
    f: 'fee',
    fr: 'fee_rate',
    ti: 'trade_id',
    oi: 'order_id',
    v: 'venue',
    g: ['greeks', GREEKS_MAP.LITE_TO_FULL]
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

// Schema map for the 'RFQ_BOOK_QUOTE' struct.
export const RFQ_BOOK_QUOTE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    quote_id: 'qi',
    client_quote_id: 'cq',
    quoter_subaccount_id: 'qs',
    quote_expiration: 'qe',
    quote_price: 'qp',
    size_no_decimal: 'sn'
  },
  LITE_TO_FULL: {
    qi: 'quote_id',
    cq: 'client_quote_id',
    qs: 'quoter_subaccount_id',
    qe: 'quote_expiration',
    qp: 'quote_price',
    sn: 'size_no_decimal'
  }
})

// Schema map for the 'RFQ_BOOK_LEVEL_LEG' struct.
export const RFQ_BOOK_LEVEL_LEG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    quotes: ['q', [RFQ_BOOK_QUOTE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    q: ['quotes', [RFQ_BOOK_QUOTE_MAP.LITE_TO_FULL]]
  }
})

// Schema map for the 'RFQ_BOOK_LEVEL' struct.
export const RFQ_BOOK_LEVEL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    level_expiration: 'le',
    level_price: 'lp',
    lots: 'l',
    legs: ['l1', [RFQ_BOOK_LEVEL_LEG_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    le: 'level_expiration',
    lp: 'level_price',
    l: 'lots',
    l1: ['legs', [RFQ_BOOK_LEVEL_LEG_MAP.LITE_TO_FULL]]
  }
})

// Schema map for the 'RFQ_BOOK' struct.
export const RFQ_BOOK_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    full: ['f', [RFQ_BOOK_QUOTE_MAP.FULL_TO_LITE]],
    partial: ['p', [RFQ_BOOK_LEVEL_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    f: ['full', [RFQ_BOOK_QUOTE_MAP.LITE_TO_FULL]],
    p: ['partial', [RFQ_BOOK_LEVEL_MAP.LITE_TO_FULL]]
  }
})

// Schema map for the 'RFQ_LEG' struct.
export const RFQ_LEG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    size_no_decimal: 'sn',
    base_ratio: 'br',
    is_bid: 'ib'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    sn: 'size_no_decimal',
    br: 'base_ratio',
    ib: 'is_bid'
  }
})

// Schema map for the 'RFQ_QUOTE' struct.
export const RFQ_QUOTE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_id: 'ri',
    is_anonymous: 'ia',
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    ri: 'rfq_id',
    ia: 'is_anonymous',
    o: ['order', ORDER_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'RFQ_STATE' struct.
export const RFQ_STATE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_status: 'rs',
    reject_reason: 'rr',
    update_time: 'ut'
  },
  LITE_TO_FULL: {
    rs: 'rfq_status',
    rr: 'reject_reason',
    ut: 'update_time'
  }
})

// Schema map for the 'SPOT_BALANCE' struct.
export const SPOT_BALANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    currency: 'c',
    balance: 'b'
  },
  LITE_TO_FULL: {
    c: 'currency',
    b: 'balance'
  }
})

// Schema map for the 'SUB_ACCOUNT' struct.
export const SUB_ACCOUNT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    margin_type: 'mt',
    quote_currency: 'qc',
    unrealized_pnl: 'up',
    total_balance: 'tb',
    initial_margin: 'im',
    maintanence_margin: 'mm',
    available_margin: 'am',
    assets: ['a', [SPOT_BALANCE_MAP.FULL_TO_LITE]],
    positions: ['p', [POSITIONS_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    mt: 'margin_type',
    qc: 'quote_currency',
    up: 'unrealized_pnl',
    tb: 'total_balance',
    im: 'initial_margin',
    mm: 'maintanence_margin',
    am: 'available_margin',
    a: ['assets', [SPOT_BALANCE_MAP.LITE_TO_FULL]],
    p: ['positions', [POSITIONS_MAP.LITE_TO_FULL]]
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

// Schema map for the 'RFQ' struct.
export const RFQ_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_id: 'ri',
    sub_account_id: 'sa',
    is_public: 'ip',
    strategy: 's',
    expiry: 'e',
    receipients: 'r',
    is_anonymous: 'ia',
    allow_partial: 'ap',
    legs: ['l', [RFQ_LEG_MAP.FULL_TO_LITE]],
    bids: ['b', RFQ_BOOK_MAP.FULL_TO_LITE],
    asks: ['a', RFQ_BOOK_MAP.FULL_TO_LITE],
    create_time: 'ct',
    state: ['s1', RFQ_STATE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    ri: 'rfq_id',
    sa: 'sub_account_id',
    ip: 'is_public',
    s: 'strategy',
    e: 'expiry',
    r: 'receipients',
    ia: 'is_anonymous',
    ap: 'allow_partial',
    l: ['legs', [RFQ_LEG_MAP.LITE_TO_FULL]],
    b: ['bids', RFQ_BOOK_MAP.LITE_TO_FULL],
    a: ['asks', RFQ_BOOK_MAP.LITE_TO_FULL],
    ct: 'create_time',
    s1: ['state', RFQ_STATE_MAP.LITE_TO_FULL]
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

// Schema map for the 'API_CANCEL_ALL_ORDERS_REQUEST' struct.
export const API_CANCEL_ALL_ORDERS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})

// Schema map for the 'API_CANCEL_ALL_ORDERS_RESPONSE' struct.
export const API_CANCEL_ALL_ORDERS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    num_cancelled: 'nc'
  },
  LITE_TO_FULL: {
    nc: 'num_cancelled'
  }
})

// Schema map for the 'API_CANCEL_ALL_RFQ_QUOTES_REQUEST' struct.
export const API_CANCEL_ALL_RFQ_QUOTES_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})

// Schema map for the 'API_CANCEL_ALL_RFQ_QUOTES_RESPONSE' struct.
export const API_CANCEL_ALL_RFQ_QUOTES_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    num_cancelled: 'nc'
  },
  LITE_TO_FULL: {
    nc: 'num_cancelled'
  }
})

// Schema map for the 'API_CANCEL_ALL_RFQS_REQUEST' struct.
export const API_CANCEL_ALL_RFQS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})

// Schema map for the 'API_CANCEL_ALL_RFQS_RESPONSE' struct.
export const API_CANCEL_ALL_RFQS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    num_cancelled: 'nc'
  },
  LITE_TO_FULL: {
    nc: 'num_cancelled'
  }
})

// Schema map for the 'API_CANCEL_ORDER_REQUEST' struct.
export const API_CANCEL_ORDER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    order_id: 'oi',
    client_order_id: 'co'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    oi: 'order_id',
    co: 'client_order_id'
  }
})

// Schema map for the 'API_CANCEL_ORDER_RESPONSE' struct.
export const API_CANCEL_ORDER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    o: ['order', ORDER_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_CANCEL_RFQ_QUOTE_REQUEST' struct.
export const API_CANCEL_RFQ_QUOTE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    quote_id: 'qi',
    client_quote_id: 'cq'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    qi: 'quote_id',
    cq: 'client_quote_id'
  }
})

// Schema map for the 'API_CANCEL_RFQ_QUOTE_RESPONSE' struct.
export const API_CANCEL_RFQ_QUOTE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_quote: ['rq', RFQ_QUOTE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    rq: ['rfq_quote', RFQ_QUOTE_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_CANCEL_RFQ_REQUEST' struct.
export const API_CANCEL_RFQ_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    rfq_id: 'ri',
    client_quote_id: 'cq'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    ri: 'rfq_id',
    cq: 'client_quote_id'
  }
})

// Schema map for the 'API_CANCEL_RFQ_RESPONSE' struct.
export const API_CANCEL_RFQ_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq: ['r', RFQ_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['rfq', RFQ_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_CREATE_ORDER_REQUEST' struct.
export const API_CREATE_ORDER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    o: ['order', ORDER_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_CREATE_ORDER_RESPONSE' struct.
export const API_CREATE_ORDER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    o: ['order', ORDER_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_CREATE_RFQ_QUOTE_REQUEST' struct.
export const API_CREATE_RFQ_QUOTE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_quote: ['rq', RFQ_QUOTE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    rq: ['rfq_quote', RFQ_QUOTE_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_CREATE_RFQ_QUOTE_RESPONSE' struct.
export const API_CREATE_RFQ_QUOTE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_quote: ['rq', RFQ_QUOTE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    rq: ['rfq_quote', RFQ_QUOTE_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_CREATE_RFQ_REQUEST' struct.
export const API_CREATE_RFQ_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq: ['r', RFQ_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['rfq', RFQ_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_CREATE_RFQ_RESPONSE' struct.
export const API_CREATE_RFQ_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq: ['r', RFQ_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['rfq', RFQ_MAP.LITE_TO_FULL]
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
    results: ['r', [INSTRUMENT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [INSTRUMENT_MAP.LITE_TO_FULL]]
  }
})

// Schema map for the 'API_MINI_TICKER_RESPONSE' struct.
export const API_MINI_TICKER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', MINI_TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['results', MINI_TICKER_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_OPEN_ORDERS_REQUEST' struct.
export const API_OPEN_ORDERS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote'
  }
})

// Schema map for the 'API_OPEN_ORDERS_RESPONSE' struct.
export const API_OPEN_ORDERS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    orders: ['o', [ORDER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    o: ['orders', [ORDER_MAP.LITE_TO_FULL]]
  }
})

// Schema map for the 'API_OPEN_RFQ_QUOTES_REQUEST' struct.
export const API_OPEN_RFQ_QUOTES_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})

// Schema map for the 'API_OPEN_RFQ_QUOTES_RESPONSE' struct.
export const API_OPEN_RFQ_QUOTES_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_quotes: ['rq', [RFQ_QUOTE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    rq: ['rfq_quotes', [RFQ_QUOTE_MAP.LITE_TO_FULL]]
  }
})

// Schema map for the 'API_OPEN_RFQS_REQUEST' struct.
export const API_OPEN_RFQS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})

// Schema map for the 'API_OPEN_RFQS_RESPONSE' struct.
export const API_OPEN_RFQS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfqs: ['r', [RFQ_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['rfqs', [RFQ_MAP.LITE_TO_FULL]]
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

// Schema map for the 'API_POSITIONS_REQUEST' struct.
export const API_POSITIONS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote'
  }
})

// Schema map for the 'API_POSITIONS_RESPONSE' struct.
export const API_POSITIONS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [POSITIONS_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [POSITIONS_MAP.LITE_TO_FULL]]
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
    results: ['r', [PUBLIC_TRADE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [PUBLIC_TRADE_MAP.LITE_TO_FULL]]
  }
})

// Schema map for the 'API_SUB_ACCOUNT_SUMMARY_REQUEST' struct.
export const API_SUB_ACCOUNT_SUMMARY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})

// Schema map for the 'API_SUB_ACCOUNT_SUMMARY_RESPONSE' struct.
export const API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', SUB_ACCOUNT_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['results', SUB_ACCOUNT_MAP.LITE_TO_FULL]
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

// Schema map for the 'API_TRADE_RFQ_REQUEST' struct.
export const API_TRADE_RFQ_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_id: 'ri',
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    ri: 'rfq_id',
    o: ['order', ORDER_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'API_TRADE_RFQ_RESPONSE' struct.
export const API_TRADE_RFQ_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_id: 'ri',
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    ri: 'rfq_id',
    o: ['order', ORDER_MAP.LITE_TO_FULL]
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

// Schema map for the 'WS_POSITIONS_REQUEST' struct.
export const WS_POSITIONS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote'
  }
})

// Schema map for the 'WS_POSITIONS_RESPONSE' struct.
export const WS_POSITIONS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', POSITIONS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', POSITIONS_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'WS_PRIVATE_TRADE_REQUEST' struct.
export const WS_PRIVATE_TRADE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote'
  }
})

// Schema map for the 'WS_PRIVATE_TRADE_RESPONSE' struct.
export const WS_PRIVATE_TRADE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', PRIVATE_TRADE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', PRIVATE_TRADE_MAP.LITE_TO_FULL]
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

// Schema map for the 'WS_RFQ_QUOTE_REQUEST' struct.
export const WS_RFQ_QUOTE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})

// Schema map for the 'WS_RFQ_QUOTE_RESPONSE' struct.
export const WS_RFQ_QUOTE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', RFQ_QUOTE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', RFQ_QUOTE_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'WS_RFQ_REQUEST' struct.
export const WS_RFQ_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})

// Schema map for the 'WS_RFQ_RESPONSE' struct.
export const WS_RFQ_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', RFQ_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', RFQ_MAP.LITE_TO_FULL]
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

// Schema map for the 'WS_ORDER_REQUEST' struct.
export const WS_ORDER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    create_only: 'co'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    co: 'create_only'
  }
})

// Schema map for the 'WS_ORDER_RESPONSE' struct.
export const WS_ORDER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', ORDER_MAP.LITE_TO_FULL]
  }
})

// Schema map for the 'WS_ORDER_STATE_REQUEST' struct.
export const WS_ORDER_STATE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    update_only: 'uo'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    uo: 'update_only'
  }
})

// Schema map for the 'WS_ORDER_STATE_RESPONSE' struct.
export const WS_ORDER_STATE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', ORDER_STATE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', ORDER_STATE_MAP.LITE_TO_FULL]
  }
})
