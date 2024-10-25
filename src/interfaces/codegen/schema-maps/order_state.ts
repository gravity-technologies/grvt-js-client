import { type SchemaPairMap } from './types'

// Schema map for the 'ORDER_STATE' struct.
export const ORDER_STATE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    status: 's',
    reject_reason: 'rr',
    book_size: 'bs',
    traded_size: 'ts',
    update_time: 'ut',
    avg_fill_price: 'af'
  },
  LITE_TO_FULL: {
    s: 'status',
    rr: 'reject_reason',
    bs: 'book_size',
    ts: 'traded_size',
    ut: 'update_time',
    af: 'avg_fill_price'
  }
})
