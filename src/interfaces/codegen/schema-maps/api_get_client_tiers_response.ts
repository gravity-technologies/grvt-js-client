import { type SchemaPairMap } from './types'
import { CLIENT_TIER_MAP } from './client_tier'

// Schema map for the 'API_GET_CLIENT_TIERS_RESPONSE' struct.
export const API_GET_CLIENT_TIERS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    tiers: ['t', [CLIENT_TIER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    t: ['tiers', [CLIENT_TIER_MAP.LITE_TO_FULL]]
  }
})
