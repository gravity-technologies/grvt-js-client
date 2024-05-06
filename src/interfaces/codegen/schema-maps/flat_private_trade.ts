import { type SchemaPairMap } from './types'

// Schema map for the 'PRIVATE_TRADE' struct.
export const PRIVATE_TRADE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    sub_account_id: 'sa',
    instrument: 'i',
    is_buyer: 'ib',
    is_taker: 'it',
    size: 's',
    price: 'p',
    mark_price: 'mp',
    index_price: 'ip',
    interest_rate: 'ir',
    forward_price: 'fp',
    realized_pnl: 'rp',
    fee: 'f',
    fee_rate: 'fr',
    trade_id: 'ti',
    order_id: 'oi',
    venue: 'v'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    sa: 'sub_account_id',
    i: 'instrument',
    ib: 'is_buyer',
    it: 'is_taker',
    s: 'size',
    p: 'price',
    mp: 'mark_price',
    ip: 'index_price',
    ir: 'interest_rate',
    fp: 'forward_price',
    rp: 'realized_pnl',
    f: 'fee',
    fr: 'fee_rate',
    ti: 'trade_id',
    oi: 'order_id',
    v: 'venue'
  }
})
