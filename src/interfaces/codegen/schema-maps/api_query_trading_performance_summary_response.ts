import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_TRADING_PERFORMANCE_SUMMARY_RESPONSE' struct.
export const API_QUERY_TRADING_PERFORMANCE_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total_pnl_ratio: 'tp',
    win_rate: 'wr'
  },
  LITE_TO_FULL: {
    tp: 'total_pnl_ratio',
    wr: 'win_rate'
  }
})
