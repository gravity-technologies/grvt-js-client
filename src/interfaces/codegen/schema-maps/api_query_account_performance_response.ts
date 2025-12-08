import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_ACCOUNT_PERFORMANCE_RESPONSE' struct.
export const API_QUERY_ACCOUNT_PERFORMANCE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    aggregated_pnl: 'ap',
    investment_pnl: 'ip'
  },
  LITE_TO_FULL: {
    ap: 'aggregated_pnl',
    ip: 'investment_pnl'
  }
})
