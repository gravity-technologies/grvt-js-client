import { type SchemaPairMap } from './types'
import { API_TRADING_PERFORMANCE_TREND_MAP } from './api_trading_performance_trend'

// Schema map for the 'API_QUERY_TRADING_PERFORMANCE_TREND_RESPONSE' struct.
export const API_QUERY_TRADING_PERFORMANCE_TREND_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [API_TRADING_PERFORMANCE_TREND_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [API_TRADING_PERFORMANCE_TREND_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
