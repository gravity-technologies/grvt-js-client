import { type SchemaPairMap } from './types'
import { APPROXIMATE_LP_SNAPSHOT_MAP } from './approximate_lp_snapshot'

// Schema map for the 'API_GET_LATEST_LP_SNAPSHOT_RESPONSE' struct.
export const API_GET_LATEST_LP_SNAPSHOT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    snapshot: ['s', APPROXIMATE_LP_SNAPSHOT_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: ['snapshot', APPROXIMATE_LP_SNAPSHOT_MAP.LITE_TO_FULL]
  }
})
