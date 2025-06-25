import { type SchemaPairMap } from './types'
import { POSITION_SUMMARY_MAP } from './position_summary'
import { SPOT_BALANCE_MAP } from './api_spot_balance'

// Schema map for the 'SNAP_SUB_ACCOUNT_SUMMARY' struct.
export const SNAP_SUB_ACCOUNT_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    start_interval: 'si',
    sub_account_id: 'sa',
    total_equity: 'te',
    unrealized_pnl: 'up',
    positions: ['p', [POSITION_SUMMARY_MAP.FULL_TO_LITE]],
    is_vault: 'iv',
    vault_im_additions: 'vi',
    spot_balances: ['sb', [SPOT_BALANCE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    si: 'start_interval',
    sa: 'sub_account_id',
    te: 'total_equity',
    up: 'unrealized_pnl',
    p: ['positions', [POSITION_SUMMARY_MAP.LITE_TO_FULL]],
    iv: 'is_vault',
    vi: 'vault_im_additions',
    sb: ['spot_balances', [SPOT_BALANCE_MAP.LITE_TO_FULL]]
  }
})
