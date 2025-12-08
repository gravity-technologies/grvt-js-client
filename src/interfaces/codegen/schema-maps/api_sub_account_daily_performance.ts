import { type SchemaPairMap } from './types'

// Schema map for the 'API_SUB_ACCOUNT_DAILY_PERFORMANCE' struct.
export const API_SUB_ACCOUNT_DAILY_PERFORMANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    pnl: 'p'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    p: 'pnl'
  }
})
