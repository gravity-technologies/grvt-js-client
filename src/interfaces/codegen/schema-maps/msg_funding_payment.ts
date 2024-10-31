import { type SchemaPairMap } from './types'

// Schema map for the 'FUNDING_PAYMENT' struct.
export const FUNDING_PAYMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    sub_account_id: 'sa',
    instrument: 'i',
    currency: 'c',
    amount: 'a',
    tx_id: 'ti'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    sa: 'sub_account_id',
    i: 'instrument',
    c: 'currency',
    a: 'amount',
    ti: 'tx_id'
  }
})
