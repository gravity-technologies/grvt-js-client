import { type SchemaPairMap } from './types'

// Schema map for the 'API_VAULT_DETAIL' struct.
export const API_VAULT_DETAIL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    share_price: 'sp',
    total_equity: 'te',
    valuation_cap: 'vc',
    unrealized_pnl: 'up'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    sp: 'share_price',
    te: 'total_equity',
    vc: 'valuation_cap',
    up: 'unrealized_pnl'
  }
})
