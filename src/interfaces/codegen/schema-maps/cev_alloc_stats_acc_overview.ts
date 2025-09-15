import { type SchemaPairMap } from './types'

// Schema map for the 'CEV_ALLOC_STATS_ACC_OVERVIEW' struct.
export const CEV_ALLOC_STATS_ACC_OVERVIEW_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total_allocation: 'ta',
    total_invested: 'ti',
    allowance: 'a',
    lifetime_trading_volume: 'lt',
    allocation_percent_centi_beeps: 'ap',
    allocation_max_cap: 'am'
  },
  LITE_TO_FULL: {
    ta: 'total_allocation',
    ti: 'total_invested',
    a: 'allowance',
    lt: 'lifetime_trading_volume',
    ap: 'allocation_percent_centi_beeps',
    am: 'allocation_max_cap'
  }
})
