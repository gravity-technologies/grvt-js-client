import { type SchemaPairMap } from './types'

// Schema map for the 'TRADING_PERFORMANCE_POINT' struct.
export const TRADING_PERFORMANCE_POINT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    trading_volume: 'tv',
    realized_pnl: 'rp',
    unrealized_pnl: 'up'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    tv: 'trading_volume',
    rp: 'realized_pnl',
    up: 'unrealized_pnl'
  }
})
