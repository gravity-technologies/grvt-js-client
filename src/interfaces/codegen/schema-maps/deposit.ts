import { type SchemaPairMap } from './types'

// Schema map for the 'DEPOSIT' struct.
export const DEPOSIT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    tx_hash: 'th',
    to_account_id: 'ta',
    token_currency: 'tc',
    num_tokens: 'nt'
  },
  LITE_TO_FULL: {
    th: 'tx_hash',
    ta: 'to_account_id',
    tc: 'token_currency',
    nt: 'num_tokens'
  }
})
