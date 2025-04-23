import { type SchemaPairMap } from './types'
import { USER_CATEGORY_AFFINITY_SCORE_MAP } from './user_category_affinity_score'

// Schema map for the 'API_USER_CATEGORY_AFFINITY_SCORE_RESPONSE' struct.
export const API_USER_CATEGORY_AFFINITY_SCORE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [USER_CATEGORY_AFFINITY_SCORE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [USER_CATEGORY_AFFINITY_SCORE_MAP.LITE_TO_FULL]]
  }
})
