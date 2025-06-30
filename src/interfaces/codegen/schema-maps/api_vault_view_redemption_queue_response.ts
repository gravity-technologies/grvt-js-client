import { type SchemaPairMap } from './types'
import { VAULT_REDEMPTION_REQ_VIEW_MAP } from './vault_redemption_req_view'

// Schema map for the 'API_VAULT_VIEW_REDEMPTION_QUEUE_RESPONSE' struct.
export const API_VAULT_VIEW_REDEMPTION_QUEUE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    redemption_queue: ['rq', [VAULT_REDEMPTION_REQ_VIEW_MAP.FULL_TO_LITE]],
    pending_redemption_token_count: 'pr',
    urgent_redemption_token_count: 'ur',
    auto_redeemable_balance_vault_quote_cur: 'ar',
    currency: 'c'
  },
  LITE_TO_FULL: {
    rq: ['redemption_queue', [VAULT_REDEMPTION_REQ_VIEW_MAP.LITE_TO_FULL]],
    pr: 'pending_redemption_token_count',
    ur: 'urgent_redemption_token_count',
    ar: 'auto_redeemable_balance_vault_quote_cur',
    c: 'currency'
  }
})
