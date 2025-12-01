import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_VAULT_INVESTOR_HISTORY_STATS_RESPONSE' struct.
export const API_QUERY_VAULT_INVESTOR_HISTORY_STATS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total_investment_amount: 'ti'
  },
  LITE_TO_FULL: {
    ti: 'total_investment_amount'
  }
})
