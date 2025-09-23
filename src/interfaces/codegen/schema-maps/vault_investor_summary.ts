import { type SchemaPairMap } from './types'
import { VAULT_REDEMPTION_MAP } from './vault_redemption'

// Schema map for the 'VAULT_INVESTOR_SUMMARY' struct.
export const VAULT_INVESTOR_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    num_lp_tokens: 'nl',
    avg_entry_price: 'ae',
    current_price: 'cp',
    total_equity: 'te',
    all_time_realized_pnl: 'at',
    pending_redemption: ['pr', VAULT_REDEMPTION_MAP.FULL_TO_LITE],
    can_burn: 'cb',
    is_vault_cross_exchange: 'iv'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    nl: 'num_lp_tokens',
    ae: 'avg_entry_price',
    cp: 'current_price',
    te: 'total_equity',
    at: 'all_time_realized_pnl',
    pr: ['pending_redemption', VAULT_REDEMPTION_MAP.LITE_TO_FULL],
    cb: 'can_burn',
    iv: 'is_vault_cross_exchange'
  }
})
