import { type SchemaPairMap } from './types'
import { API_VAULT_PERFORMANCE_TREND_MAP } from './api_vault_performance_trend'

// Schema map for the 'API_QUERY_VAULT_PERFORMANCE_TREND_RESPONSE' struct.
export const API_QUERY_VAULT_PERFORMANCE_TREND_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [API_VAULT_PERFORMANCE_TREND_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [API_VAULT_PERFORMANCE_TREND_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
