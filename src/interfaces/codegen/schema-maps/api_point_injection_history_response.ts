import { type SchemaPairMap } from './types'
import { POINT_DISTRIBUTION_MAP } from './point_distribution'

// Schema map for the 'API_POINT_INJECTION_HISTORY_RESPONSE' struct.
export const API_POINT_INJECTION_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [POINT_DISTRIBUTION_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [POINT_DISTRIBUTION_MAP.LITE_TO_FULL]]
  }
})
