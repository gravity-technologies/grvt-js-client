import { type SchemaPairMap } from './types'
import { TRADING_PERFORMANCE_TREND_POINT_MAP } from './trading_performance_trend_point'

// Schema map for the 'QUERY_TRADING_PERFORMANCE_TREND_RESPONSE' struct.
export const QUERY_TRADING_PERFORMANCE_TREND_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [TRADING_PERFORMANCE_TREND_POINT_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [TRADING_PERFORMANCE_TREND_POINT_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
