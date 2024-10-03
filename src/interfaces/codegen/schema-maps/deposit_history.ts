import { type SchemaPairMap } from './types'

// Schema map for the 'DEPOSIT_HISTORY' struct.
export const DEPOSIT_HISTORY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    tx_id: 'ti',
    tx_hash: 'th',
    to_account_id: 'ta',
    currency: 'c',
    num_tokens: 'nt',
    event_time: 'et'
  },
  LITE_TO_FULL: {
    ti: 'tx_id',
    th: 'tx_hash',
    ta: 'to_account_id',
    c: 'currency',
    nt: 'num_tokens',
    et: 'event_time'
  }
})
