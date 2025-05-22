import { type SchemaPairMap } from './types'
import { SPOT_BALANCE_MAP } from './api_spot_balance'
import { POSITIONS_MAP } from './api_position'

// Schema map for the 'SUB_ACCOUNT' struct.
export const SUB_ACCOUNT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    sub_account_id: 'sa',
    margin_type: 'mt',
    settle_currency: 'sc',
    unrealized_pnl: 'up',
    total_equity: 'te',
    initial_margin: 'im',
    maintenance_margin: 'mm',
    available_balance: 'ab',
    spot_balances: ['sb', [SPOT_BALANCE_MAP.FULL_TO_LITE]],
    positions: ['p', [POSITIONS_MAP.FULL_TO_LITE]],
    settle_index_price: 'si',
    is_vault: 'iv',
    vault_im_additions: 'vi'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    sa: 'sub_account_id',
    mt: 'margin_type',
    sc: 'settle_currency',
    up: 'unrealized_pnl',
    te: 'total_equity',
    im: 'initial_margin',
    mm: 'maintenance_margin',
    ab: 'available_balance',
    sb: ['spot_balances', [SPOT_BALANCE_MAP.LITE_TO_FULL]],
    p: ['positions', [POSITIONS_MAP.LITE_TO_FULL]],
    si: 'settle_index_price',
    iv: 'is_vault',
    vi: 'vault_im_additions'
  }
})
