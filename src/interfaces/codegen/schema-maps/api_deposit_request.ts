import { type SchemaPairMap } from './types'

// Schema map for the 'API_DEPOSIT_REQUEST' struct.
export const API_DEPOSIT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    to_account_id: 'ta',
    token_currency: 'tc',
    num_tokens: 'nt'
  },
  LITE_TO_FULL: {
    ta: 'to_account_id',
    tc: 'token_currency',
    nt: 'num_tokens'
  }
})
