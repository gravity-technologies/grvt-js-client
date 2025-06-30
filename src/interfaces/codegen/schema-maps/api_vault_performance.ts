import { type SchemaPairMap } from './types'

// Schema map for the 'API_VAULT_PERFORMANCE' struct.
export const API_VAULT_PERFORMANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    trading_volume: 'tv',
    apr: 'a',
    realized_pnl: 'rp',
    pnl: 'p'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    tv: 'trading_volume',
    a: 'apr',
    rp: 'realized_pnl',
    p: 'pnl'
  }
})
