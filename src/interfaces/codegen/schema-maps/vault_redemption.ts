import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_REDEMPTION' struct.
export const VAULT_REDEMPTION_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    num_lp_tokens: 'nl',
    request_valuation: 'rv',
    request_time: 'rt',
    max_redemption_period_timestamp: 'mr',
    cancel_blocked: 'cb'
  },
  LITE_TO_FULL: {
    nl: 'num_lp_tokens',
    rv: 'request_valuation',
    rt: 'request_time',
    mr: 'max_redemption_period_timestamp',
    cb: 'cancel_blocked'
  }
})
