import { type SchemaPairMap } from './types'

// Schema map for the 'API_ACCOUNT_PERFORMANCE_TREND' struct.
export const API_ACCOUNT_PERFORMANCE_TREND_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    end_interval: 'ei',
    aggregated_pnl: 'ap',
    investment_pnl: 'ip'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    ei: 'end_interval',
    ap: 'aggregated_pnl',
    ip: 'investment_pnl'
  }
})
