import { type SchemaPairMap } from './types'
import { LP_POINT_MAP } from './lp_point'

// Schema map for the 'API_GET_LP_LEADERBOARD_RESPONSE' struct.
export const API_GET_LP_LEADERBOARD_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    points: ['p', [LP_POINT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    p: ['points', [LP_POINT_MAP.LITE_TO_FULL]]
  }
})
