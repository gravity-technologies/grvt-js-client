import { type SchemaPairMap } from './types'

// Schema map for the 'API_VAULT_DETAIL_RESPONSE' struct.
export const API_VAULT_DETAIL_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    share_price: 'sp',
    total_equity: 'te',
    valuation_cap: 'vc',
    unrealized_pnl: 'up',
    initial_margin: 'im',
    maintenance_margin: 'mm'
  },
  LITE_TO_FULL: {
    sp: 'share_price',
    te: 'total_equity',
    vc: 'valuation_cap',
    up: 'unrealized_pnl',
    im: 'initial_margin',
    mm: 'maintenance_margin'
  }
})
