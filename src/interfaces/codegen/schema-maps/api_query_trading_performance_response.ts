import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_TRADING_PERFORMANCE_RESPONSE' struct.
export const API_QUERY_TRADING_PERFORMANCE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    trading_volume: 'tv',
    realized_pnl: 'rp',
    cumulative_pnl: 'cp'
  },
  LITE_TO_FULL: {
    tv: 'trading_volume',
    rp: 'realized_pnl',
    cp: 'cumulative_pnl'
  }
})
