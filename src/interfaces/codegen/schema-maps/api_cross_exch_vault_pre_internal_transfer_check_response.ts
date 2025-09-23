import { type SchemaPairMap } from './types'

// Schema map for the 'API_CROSS_EXCH_VAULT_PRE_INTERNAL_TRANSFER_CHECK_RESPONSE' struct.
export const API_CROSS_EXCH_VAULT_PRE_INTERNAL_TRANSFER_CHECK_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    internal_transfer_allowance_num_tokens: 'it',
    currency: 'c'
  },
  LITE_TO_FULL: {
    it: 'internal_transfer_allowance_num_tokens',
    c: 'currency'
  }
})
