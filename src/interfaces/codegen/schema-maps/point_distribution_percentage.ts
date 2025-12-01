import { type SchemaPairMap } from './types'

// Schema map for the 'POINT_DISTRIBUTION_PERCENTAGE' struct.
export const POINT_DISTRIBUTION_PERCENTAGE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    trading_volume: 'tv',
    trading_lp_point: 'tl',
    trading_open_interest: 'to',
    trading_liquidation: 'tl1',
    tvl: 't',
    community_referral: 'cr',
    reserve_pool: 'rp'
  },
  LITE_TO_FULL: {
    tv: 'trading_volume',
    tl: 'trading_lp_point',
    to: 'trading_open_interest',
    tl1: 'trading_liquidation',
    t: 'tvl',
    cr: 'community_referral',
    rp: 'reserve_pool'
  }
})
