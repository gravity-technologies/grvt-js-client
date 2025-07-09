import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_REDEMPTION_REQ_VIEW' struct.
export const VAULT_REDEMPTION_REQ_VIEW_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    request_time: 'rt',
    currency: 'c',
    num_lp_tokens: 'nl',
    max_redemption_period_timestamp: 'mr',
    age_category: 'ac'
  },
  LITE_TO_FULL: {
    rt: 'request_time',
    c: 'currency',
    nl: 'num_lp_tokens',
    mr: 'max_redemption_period_timestamp',
    ac: 'age_category'
  }
})
