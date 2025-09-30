import { type SchemaPairMap } from './types'

// Schema map for the 'CEV_ACCESS_TIER' struct.
export const CEV_ACCESS_TIER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    idx: 'i',
    lifetime_trading_volume_range_start: 'lt',
    lifetime_trading_volume_range_end: 'lt1',
    allocation_total_equity_percentage_centi_beeps: 'at',
    allocation_max_cap: 'am'
  },
  LITE_TO_FULL: {
    i: 'idx',
    lt: 'lifetime_trading_volume_range_start',
    lt1: 'lifetime_trading_volume_range_end',
    at: 'allocation_total_equity_percentage_centi_beeps',
    am: 'allocation_max_cap'
  }
})
