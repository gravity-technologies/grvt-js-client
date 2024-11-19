import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_LP_INFO_RESPONSE' struct.
export const API_GET_LP_INFO_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    is_lp_maker: 'il',
    spread_score_value_multiplier: 'ss',
    depth_score_value_multiplier: 'ds',
    market_share_value_multiplier: 'ms',
    underlying_multiplier: 'um',
    market_share_multiplier: 'ms1',
    ask_fast_market_multiplier: 'af',
    bid_fast_market_multiplier: 'bf'
  },
  LITE_TO_FULL: {
    il: 'is_lp_maker',
    ss: 'spread_score_value_multiplier',
    ds: 'depth_score_value_multiplier',
    ms: 'market_share_value_multiplier',
    um: 'underlying_multiplier',
    ms1: 'market_share_multiplier',
    af: 'ask_fast_market_multiplier',
    bf: 'bid_fast_market_multiplier'
  }
})
