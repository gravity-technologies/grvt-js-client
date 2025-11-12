import { type SchemaPairMap } from './types'

// Schema map for the 'API_VAULT_DETAIL' struct.
export const API_VAULT_DETAIL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    share_price: 'sp',
    total_equity: 'te',
    valuation_cap: 'vc',
    unrealized_pnl: 'up',
    total_supply_lp_tokens: 'ts',
    last_cross_exchange_equity_attest_timestamp: 'lc',
    is_vault_locked: 'iv',
    is_cross_exchange: 'ic',
    is_ungated: 'iu'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    sp: 'share_price',
    te: 'total_equity',
    vc: 'valuation_cap',
    up: 'unrealized_pnl',
    ts: 'total_supply_lp_tokens',
    lc: 'last_cross_exchange_equity_attest_timestamp',
    iv: 'is_vault_locked',
    ic: 'is_cross_exchange',
    iu: 'is_ungated'
  }
})
