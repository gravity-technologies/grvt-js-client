import { type SchemaPairMap } from './types'

// Schema map for the 'BUILDER_FILL_HISTORY' struct.
export const BUILDER_FILL_HISTORY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    off_chain_account_id: 'oc',
    instrument: 'i',
    is_buyer: 'ib',
    is_taker: 'it',
    size: 's',
    price: 'p',
    mark_price: 'mp',
    index_price: 'ip',
    fee_rate: 'fr',
    fee: 'f'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    oc: 'off_chain_account_id',
    i: 'instrument',
    ib: 'is_buyer',
    it: 'is_taker',
    s: 'size',
    p: 'price',
    mp: 'mark_price',
    ip: 'index_price',
    fr: 'fee_rate',
    f: 'fee'
  }
})
