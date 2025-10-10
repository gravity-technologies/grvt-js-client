import { type SchemaPairMap } from './types'
import { CEV_ACCESS_TIER_MAP } from './cev_access_tier'
import { CEV_ACCESS_TIER_OVERWRITE_MAP } from './cev_access_tier_overwrite'

// Schema map for the 'API_SET_CEV_ACCESS_TIERS_REQUEST' struct.
export const API_SET_CEV_ACCESS_TIERS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    enabled: 'e',
    tiers: ['t', [CEV_ACCESS_TIER_MAP.FULL_TO_LITE]],
    overwrites: ['o', [CEV_ACCESS_TIER_OVERWRITE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    e: 'enabled',
    t: ['tiers', [CEV_ACCESS_TIER_MAP.LITE_TO_FULL]],
    o: ['overwrites', [CEV_ACCESS_TIER_OVERWRITE_MAP.LITE_TO_FULL]]
  }
})
