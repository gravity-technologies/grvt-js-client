import { type SchemaPairMap } from './types'
import { API_ACCOUNT_PERFORMANCE_TREND_MAP } from './api_account_performance_trend'

// Schema map for the 'API_QUERY_ACCOUNT_DAILY_PERFORMANCE_RESPONSE' struct.
export const API_QUERY_ACCOUNT_DAILY_PERFORMANCE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [API_ACCOUNT_PERFORMANCE_TREND_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [API_ACCOUNT_PERFORMANCE_TREND_MAP.LITE_TO_FULL]]
  }
})
