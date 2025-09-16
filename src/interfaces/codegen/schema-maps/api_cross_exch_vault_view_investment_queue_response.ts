import { type SchemaPairMap } from './types'
import { CROSS_EXCH_VAULT_PENDING_INVESTMENT_MAP } from './cross_exch_vault_pending_investment_view'

// Schema map for the 'API_CROSS_EXCH_VAULT_VIEW_INVESTMENT_QUEUE_RESPONSE' struct.
export const API_CROSS_EXCH_VAULT_VIEW_INVESTMENT_QUEUE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    investment_queue: ['iq', [CROSS_EXCH_VAULT_PENDING_INVESTMENT_MAP.FULL_TO_LITE]],
    total_investment_equity: 'ti'
  },
  LITE_TO_FULL: {
    iq: ['investment_queue', [CROSS_EXCH_VAULT_PENDING_INVESTMENT_MAP.LITE_TO_FULL]],
    ti: 'total_investment_equity'
  }
})
