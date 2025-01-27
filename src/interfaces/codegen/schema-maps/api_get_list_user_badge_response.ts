import { type SchemaPairMap } from './types'
import { EPOCH_BADGE_MAP } from './epoch_badge'

// Schema map for the 'API_GET_LIST_USER_BADGE_RESPONSE' struct.
export const API_GET_LIST_USER_BADGE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [EPOCH_BADGE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [EPOCH_BADGE_MAP.LITE_TO_FULL]]
  }
})
