import { type SchemaPairMap } from './types'
import { SPOT_BALANCE_MAP } from './api_spot_balance'
import { POSITIONS_MAP } from './api_position'

// Schema map for the 'SUB_ACCOUNT' struct.
export const SUB_ACCOUNT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    sub_account_id: 'sa',
    margin_type: 'mt',
    quote_currency: 'qc',
    unrealized_pnl: 'up',
    total_value: 'tv',
    initial_margin: 'im',
    maintanence_margin: 'mm',
    available_margin: 'am',
    spot_balances: ['sb', [SPOT_BALANCE_MAP.FULL_TO_LITE]],
    positions: ['p', [POSITIONS_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    sa: 'sub_account_id',
    mt: 'margin_type',
    qc: 'quote_currency',
    up: 'unrealized_pnl',
    tv: 'total_value',
    im: 'initial_margin',
    mm: 'maintanence_margin',
    am: 'available_margin',
    sb: ['spot_balances', [SPOT_BALANCE_MAP.LITE_TO_FULL]],
    p: ['positions', [POSITIONS_MAP.LITE_TO_FULL]]
  }
})
