import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_INVESTMENT' struct.
export const VAULT_INVESTMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    num_lp_tokens: 'nl',
    share_price: 'sp'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    nl: 'num_lp_tokens',
    sp: 'share_price'
  }
})
