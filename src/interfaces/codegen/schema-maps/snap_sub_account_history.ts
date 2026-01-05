import { type SchemaPairMap } from './types'

// Schema map for the 'SNAP_SUB_ACCOUNT_HISTORY' struct.
export const SNAP_SUB_ACCOUNT_HISTORY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    sub_account_id: 'sa',
    total_equity: 'te',
    unrealized_pnl: 'up',
    is_vault: 'iv',
    event_time: 'et'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    sa: 'sub_account_id',
    te: 'total_equity',
    up: 'unrealized_pnl',
    iv: 'is_vault',
    et: 'event_time'
  }
})
