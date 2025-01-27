import { type SchemaPairMap } from './types'
import { EPOCH_BADGE_MAP } from './epoch_badge'

// Schema map for the 'CLAIM_ECOSYSTEM_BADGE_RESPONSE' struct.
export const CLAIM_ECOSYSTEM_BADGE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    badge: ['b', EPOCH_BADGE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    b: ['badge', EPOCH_BADGE_MAP.LITE_TO_FULL]
  }
})
