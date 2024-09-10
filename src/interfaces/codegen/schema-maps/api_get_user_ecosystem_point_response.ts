import { type SchemaPairMap } from './types'
import { ECOSYSTEM_POINT_MAP } from './ecosystem_point'

// Schema map for the 'API_GET_USER_ECOSYSTEM_POINT_RESPONSE' struct.
export const API_GET_USER_ECOSYSTEM_POINT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    points: ['p', [ECOSYSTEM_POINT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    p: ['points', [ECOSYSTEM_POINT_MAP.LITE_TO_FULL]]
  }
})
