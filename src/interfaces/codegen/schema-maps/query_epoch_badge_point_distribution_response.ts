import { type SchemaPairMap } from './types'
import { EPOCH_BADGE_POINT_DISTRIBUTION_MAP } from './epoch_badge_point_distribution'

// Schema map for the 'QUERY_EPOCH_BADGE_POINT_DISTRIBUTION_RESPONSE' struct.
export const QUERY_EPOCH_BADGE_POINT_DISTRIBUTION_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [EPOCH_BADGE_POINT_DISTRIBUTION_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [EPOCH_BADGE_POINT_DISTRIBUTION_MAP.LITE_TO_FULL]]
  }
})
