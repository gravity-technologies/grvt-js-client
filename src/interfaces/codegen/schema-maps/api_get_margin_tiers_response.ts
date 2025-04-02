import { type SchemaPairMap } from './types'
import { ASSET_MARGIN_TIER_RESPONSE_MAP } from './asset_margin_tier_response'

// Schema map for the 'API_GET_MARGIN_TIERS_RESPONSE' struct.
export const API_GET_MARGIN_TIERS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [ASSET_MARGIN_TIER_RESPONSE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [ASSET_MARGIN_TIER_RESPONSE_MAP.LITE_TO_FULL]]
  }
})
