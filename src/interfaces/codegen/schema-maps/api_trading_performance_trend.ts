import { type SchemaPairMap } from './types'

// Schema map for the 'API_TRADING_PERFORMANCE_TREND' struct.
export const API_TRADING_PERFORMANCE_TREND_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    trading_volume: 'tv',
    realized_pnl: 'rp'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    tv: 'trading_volume',
    rp: 'realized_pnl'
  }
})
