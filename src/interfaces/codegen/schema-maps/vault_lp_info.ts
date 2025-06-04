import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_LP_INFO' struct.
export const VAULT_LP_INFO_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    lp_token_balance: 'lt',
    usd_notional_invested: 'un'
  },
  LITE_TO_FULL: {
    lt: 'lp_token_balance',
    un: 'usd_notional_invested'
  }
})
