import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_INVEST_RESULTS' struct.
export const VAULT_INVEST_RESULTS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    token_index_price: 'ti',
    vault_total_equity: 'vt',
    vault_share_price: 'vs',
    num_lp_tokens: 'nl'
  },
  LITE_TO_FULL: {
    ti: 'token_index_price',
    vt: 'vault_total_equity',
    vs: 'vault_share_price',
    nl: 'num_lp_tokens'
  }
})
