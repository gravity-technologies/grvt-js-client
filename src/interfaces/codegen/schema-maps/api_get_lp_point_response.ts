import { type SchemaPairMap } from './types'
import { APPROXIMATE_LP_POINT_MAP } from './approximate_lp_point'

// Schema map for the 'API_GET_LP_POINT_RESPONSE' struct.
export const API_GET_LP_POINT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    point: ['p', APPROXIMATE_LP_POINT_MAP.FULL_TO_LITE],
    maker_count: 'mc'
  },
  LITE_TO_FULL: {
    p: ['point', APPROXIMATE_LP_POINT_MAP.LITE_TO_FULL],
    mc: 'maker_count'
  }
})
