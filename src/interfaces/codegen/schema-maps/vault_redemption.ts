import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_REDEMPTION' struct.
export const VAULT_REDEMPTION_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    num_lp_tokens: 'nl',
    request_valuation: 'rv'
  },
  LITE_TO_FULL: {
    nl: 'num_lp_tokens',
    rv: 'request_valuation'
  }
})
