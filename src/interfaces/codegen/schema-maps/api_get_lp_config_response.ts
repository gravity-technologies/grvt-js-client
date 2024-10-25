import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_LP_CONFIG_RESPONSE' struct.
export const API_GET_LP_CONFIG_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    spread_score_multiplier: 'ss',
    depth_score_multiplier: 'ds',
    market_share_multiplier: 'ms',
    is_lp_maker: 'il'
  },
  LITE_TO_FULL: {
    ss: 'spread_score_multiplier',
    ds: 'depth_score_multiplier',
    ms: 'market_share_multiplier',
    il: 'is_lp_maker'
  }
})
