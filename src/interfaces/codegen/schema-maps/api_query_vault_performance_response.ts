import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_VAULT_PERFORMANCE_RESPONSE' struct.
export const API_QUERY_VAULT_PERFORMANCE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    trading_volume: 'tv',
    apr: 'a',
    realized_pnl: 'rp',
    pnl: 'p'
  },
  LITE_TO_FULL: {
    tv: 'trading_volume',
    a: 'apr',
    rp: 'realized_pnl',
    p: 'pnl'
  }
})
