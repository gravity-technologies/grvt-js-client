import { type SchemaPairMap } from './types'

// Schema map for the 'API_CROSS_EXCH_VAULT_PRE_WITHDRAW_CHECK_RESPONSE' struct.
export const API_CROSS_EXCH_VAULT_PRE_WITHDRAW_CHECK_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    withdrawal_allowance_num_tokens: 'wa',
    currency: 'c'
  },
  LITE_TO_FULL: {
    wa: 'withdrawal_allowance_num_tokens',
    c: 'currency'
  }
})
