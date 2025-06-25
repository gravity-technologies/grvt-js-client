import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_BURN_LP_TOKEN_RESULTS' struct.
export const VAULT_BURN_LP_TOKEN_RESULTS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_share_price: 'vs'
  },
  LITE_TO_FULL: {
    vs: 'vault_share_price'
  }
})
