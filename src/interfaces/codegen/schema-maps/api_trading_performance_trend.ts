import { type SchemaPairMap } from './types'

// Schema map for the 'API_TRADING_PERFORMANCE_TREND' struct.
export const API_TRADING_PERFORMANCE_TREND_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    end_interval: 'ei',
    trading_volume: 'tv',
    realized_pnl: 'rp',
    pnl: 'p',
    cumulative_pnl: 'cp'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    ei: 'end_interval',
    tv: 'trading_volume',
    rp: 'realized_pnl',
    p: 'pnl',
    cp: 'cumulative_pnl'
  }
})
