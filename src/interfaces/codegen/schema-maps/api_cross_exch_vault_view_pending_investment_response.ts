import { type SchemaPairMap } from './types'
import { CROSS_EXCH_VAULT_PENDING_INVESTMENT_MAP } from './cross_exch_vault_pending_investment_view'

// Schema map for the 'API_CROSS_EXCH_VAULT_VIEW_PENDING_INVESTMENT_RESPONSE' struct.
export const API_CROSS_EXCH_VAULT_VIEW_PENDING_INVESTMENT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    pending_investment: ['pi', CROSS_EXCH_VAULT_PENDING_INVESTMENT_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    pi: ['pending_investment', CROSS_EXCH_VAULT_PENDING_INVESTMENT_MAP.LITE_TO_FULL]
  }
})
