import { type SchemaPairMap } from './types'
import { EPOCH_BADGE_MAP } from './epoch_badge'

// Schema map for the 'GET_CLAIMABLE_ECOSYSTEM_BADGE_RESPONSE' struct.
export const GET_CLAIMABLE_ECOSYSTEM_BADGE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    badge: ['b', EPOCH_BADGE_MAP.FULL_TO_LITE],
    is_claimable: 'ic',
    claimable_until: 'cu'
  },
  LITE_TO_FULL: {
    b: ['badge', EPOCH_BADGE_MAP.LITE_TO_FULL],
    ic: 'is_claimable',
    cu: 'claimable_until'
  }
})
