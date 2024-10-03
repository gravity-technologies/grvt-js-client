import { type SchemaPairMap } from './types'
import { LP_SNAPSHOT_MAP } from './lp_snapshot'

// Schema map for the 'QUERY_GET_LATEST_LP_SNAPSHOT_RESPONSE' struct.
export const QUERY_GET_LATEST_LP_SNAPSHOT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    snapshot: ['s', LP_SNAPSHOT_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: ['snapshot', LP_SNAPSHOT_MAP.LITE_TO_FULL]
  }
})
