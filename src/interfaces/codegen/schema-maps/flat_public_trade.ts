import { type SchemaPairMap } from './types'

// Schema map for the 'TRADE' struct.
export const TRADE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    instrument: 'i',
    is_taker_buyer: 'it',
    size: 's',
    price: 'p',
    mark_price: 'mp',
    index_price: 'ip',
    interest_rate: 'ir',
    forward_price: 'fp',
    trade_id: 'ti',
    venue: 'v',
    is_liquidation: 'il',
    trade_index: 'ti1',
    is_rpi: 'ir1'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    i: 'instrument',
    it: 'is_taker_buyer',
    s: 'size',
    p: 'price',
    mp: 'mark_price',
    ip: 'index_price',
    ir: 'interest_rate',
    fp: 'forward_price',
    ti: 'trade_id',
    v: 'venue',
    il: 'is_liquidation',
    ti1: 'trade_index',
    ir1: 'is_rpi'
  }
})
