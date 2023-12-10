import { type SchemaPairMap } from './types'
import { SPOT_BALANCE_MAP } from './api_spot_balance'
import { POSITIONS_MAP } from './api_position'

// Schema map for the 'SUB_ACCOUNT' struct.
export const SUB_ACCOUNT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    margin_type: 'mt',
    quote_currency: 'qc',
    unrealized_pnl: 'up',
    total_balance: 'tb',
    initial_margin: 'im',
    maintanence_margin: 'mm',
    available_margin: 'am',
    assets: ['a', [SPOT_BALANCE_MAP.FULL_TO_LITE]],
    positions: ['p', [POSITIONS_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    mt: 'margin_type',
    qc: 'quote_currency',
    up: 'unrealized_pnl',
    tb: 'total_balance',
    im: 'initial_margin',
    mm: 'maintanence_margin',
    am: 'available_margin',
    a: ['assets', [SPOT_BALANCE_MAP.LITE_TO_FULL]],
    p: ['positions', [POSITIONS_MAP.LITE_TO_FULL]]
  }
})
