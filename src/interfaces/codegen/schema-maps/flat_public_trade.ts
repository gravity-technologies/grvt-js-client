import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'PUBLIC_TRADE' struct.
export const PUBLIC_TRADE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    is_taker_buyer: 'it',
    size: 's',
    price: 'p',
    mark_price: 'mp',
    index_price: 'ip',
    interest_rate: 'ir',
    forward_price: 'fp',
    trade_id: 'ti',
    venue: 'v'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    it: 'is_taker_buyer',
    s: 'size',
    p: 'price',
    mp: 'mark_price',
    ip: 'index_price',
    ir: 'interest_rate',
    fp: 'forward_price',
    ti: 'trade_id',
    v: 'venue'
  }
})
