import { type SchemaPairMap } from './types'
import { CEV_ACCESS_TIER_MAP } from './cev_access_tier'

// Schema map for the 'API_GET_CEV_ACCESS_TIERS_RESPONSE' struct.
export const API_GET_CEV_ACCESS_TIERS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    enabled: 'e',
    tiers: ['t', [CEV_ACCESS_TIER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    e: 'enabled',
    t: ['tiers', [CEV_ACCESS_TIER_MAP.LITE_TO_FULL]]
  }
})
