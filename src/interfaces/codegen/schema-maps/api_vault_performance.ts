import { type SchemaPairMap } from './types'

// Schema map for the 'API_VAULT_PERFORMANCE' struct.
export const API_VAULT_PERFORMANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    trading_volume: 'tv',
    apr: 'a',
    realized_pnl: 'rp',
    pnl: 'p',
    cumulative_pnl: 'cp',
    return_since_interception: 'rs',
    return_30_d: 'r3',
    return_90_d: 'r9',
    return_ytd: 'ry'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    tv: 'trading_volume',
    a: 'apr',
    rp: 'realized_pnl',
    p: 'pnl',
    cp: 'cumulative_pnl',
    rs: 'return_since_interception',
    r3: 'return_30_d',
    r9: 'return_90_d',
    ry: 'return_ytd'
  }
})
