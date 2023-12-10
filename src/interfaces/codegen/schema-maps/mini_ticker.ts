import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

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
