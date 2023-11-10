/**
 * Place to define all the schema maps for lite/full APIs request/response.
 */

export const MINI_TICKER_SCHEMA_MAP = Object.freeze({
  REQUEST: {
    asset: 'a',
    kind: 'k',
    underlying: 'u',
    quote: 'q'
  },
  RESPONSE: {
    r: 'results',
    et: 'event_time',
    a: 'asset',
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
