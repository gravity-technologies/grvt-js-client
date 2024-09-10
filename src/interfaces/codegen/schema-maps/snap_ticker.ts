import { type SchemaPairMap } from './types'

// Schema map for the 'TICKER' struct.
export const TICKER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    instrument: 'i',
    mark_price: 'mp',
    index_price: 'ip',
    last_price: 'lp',
    last_size: 'ls',
    mid_price: 'mp1',
    best_bid_price: 'bb',
    best_bid_size: 'bb1',
    best_ask_price: 'ba',
    best_ask_size: 'ba1',
    funding_rate_8_h_curr: 'fr',
    funding_rate_8_h_avg: 'fr1',
    interest_rate: 'ir',
    forward_price: 'fp',
    buy_volume_24_h_u: 'bv',
    sell_volume_24_h_u: 'sv',
    buy_volume_24_h_q: 'bv1',
    sell_volume_24_h_q: 'sv1',
    high_price: 'hp',
    low_price: 'lp1',
    open_price: 'op',
    open_interest: 'oi',
    long_short_ratio: 'ls1'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    i: 'instrument',
    mp: 'mark_price',
    ip: 'index_price',
    lp: 'last_price',
    ls: 'last_size',
    mp1: 'mid_price',
    bb: 'best_bid_price',
    bb1: 'best_bid_size',
    ba: 'best_ask_price',
    ba1: 'best_ask_size',
    fr: 'funding_rate_8_h_curr',
    fr1: 'funding_rate_8_h_avg',
    ir: 'interest_rate',
    fp: 'forward_price',
    bv: 'buy_volume_24_h_u',
    sv: 'sell_volume_24_h_u',
    bv1: 'buy_volume_24_h_q',
    sv1: 'sell_volume_24_h_q',
    hp: 'high_price',
    lp1: 'low_price',
    op: 'open_price',
    oi: 'open_interest',
    ls1: 'long_short_ratio'
  }
})
