import { type SchemaPairMap } from './types'

// Schema map for the 'CEV_ALLOC_STATS_ACC_OVERVIEW' struct.
export const CEV_ALLOC_STATS_ACC_OVERVIEW_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total_allocation: 'ta',
    total_invested: 'ti',
    total_pending_invest: 'tp',
    allowance: 'a',
    lifetime_trading_volume: 'lt',
    allocation_percent: 'ap',
    allocation_max_cap: 'am',
    total_pending_redeem: 'tp1'
  },
  LITE_TO_FULL: {
    ta: 'total_allocation',
    ti: 'total_invested',
    tp: 'total_pending_invest',
    a: 'allowance',
    lt: 'lifetime_trading_volume',
    ap: 'allocation_percent',
    am: 'allocation_max_cap',
    tp1: 'total_pending_redeem'
  }
})
