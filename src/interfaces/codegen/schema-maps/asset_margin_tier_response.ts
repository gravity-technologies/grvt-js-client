import { type SchemaPairMap } from './types'
import { MARGIN_TIER_RESPONSE_MAP } from './margin_tier_response'

// Schema map for the 'ASSET_MARGIN_TIER_RESPONSE' struct.
export const ASSET_MARGIN_TIER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    tiers: ['t', [MARGIN_TIER_RESPONSE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    a: 'asset',
    t: ['tiers', [MARGIN_TIER_RESPONSE_MAP.LITE_TO_FULL]]
  }
})
