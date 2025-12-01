import { type SchemaPairMap } from './types'

// Schema map for the 'RISK_BRACKET' struct.
export const RISK_BRACKET_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    tier: 't',
    notional_floor: 'nf',
    notional_cap: 'nc',
    maintenance_margin_rate: 'mm',
    initial_margin_rate: 'im',
    max_leverage: 'ml',
    cumulative_maintenance_amount: 'cm'
  },
  LITE_TO_FULL: {
    t: 'tier',
    nf: 'notional_floor',
    nc: 'notional_cap',
    mm: 'maintenance_margin_rate',
    im: 'initial_margin_rate',
    ml: 'max_leverage',
    cm: 'cumulative_maintenance_amount'
  }
})
