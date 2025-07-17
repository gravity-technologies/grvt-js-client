import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_REDEMPTION_REQUEST' struct.
export const VAULT_REDEMPTION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    request_time: 'rt',
    num_lp_tokens: 'nl',
    max_redemption_period_timestamp: 'mr',
    age_category: 'ac',
    is_manager: 'im',
    eligible_for_auto_redemption_timestamp: 'ef'
  },
  LITE_TO_FULL: {
    rt: 'request_time',
    nl: 'num_lp_tokens',
    mr: 'max_redemption_period_timestamp',
    ac: 'age_category',
    im: 'is_manager',
    ef: 'eligible_for_auto_redemption_timestamp'
  }
})
