import { type SchemaPairMap } from './types'

// Schema map for the 'APPROXIMATE_LP_SNAPSHOT' struct.
export const APPROXIMATE_LP_SNAPSHOT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    underlying_multiplier: 'um',
    market_share_multiplier: 'ms',
    bid_fast_market_multiplier: 'bf',
    ask_fast_market_multiplier: 'af',
    liquidity_score: 'ls',
    calculate_at: 'ca'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    um: 'underlying_multiplier',
    ms: 'market_share_multiplier',
    bf: 'bid_fast_market_multiplier',
    af: 'ask_fast_market_multiplier',
    ls: 'liquidity_score',
    ca: 'calculate_at'
  }
})
