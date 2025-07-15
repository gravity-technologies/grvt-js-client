import { type SchemaPairMap } from './types'
import { CLIENT_TIER_MAP } from './client_tier'

// Schema map for the 'API_SET_CLIENT_TIERS_REQUEST' struct.
export const API_SET_CLIENT_TIERS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    tiers: ['t', [CLIENT_TIER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    t: ['tiers', [CLIENT_TIER_MAP.LITE_TO_FULL]]
  }
})
