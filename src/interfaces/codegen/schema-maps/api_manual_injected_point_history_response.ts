import { type SchemaPairMap } from './types'
import { MANUAL_POINT_DISTRIBUTION_MAP } from './manual_point_distribution'

// Schema map for the 'API_MANUAL_INJECTED_POINT_HISTORY_RESPONSE' struct.
export const API_MANUAL_INJECTED_POINT_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [MANUAL_POINT_DISTRIBUTION_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [MANUAL_POINT_DISTRIBUTION_MAP.LITE_TO_FULL]]
  }
})
