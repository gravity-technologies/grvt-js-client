import { type SchemaPairMap } from './types'
import { EPOCH_POINT_STATS_MAP } from './epoch_point_stats'

// Schema map for the 'QUERY_EPOCH_POINT_STATS_RESPONSE' struct.
export const QUERY_EPOCH_POINT_STATS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stats: ['s', EPOCH_POINT_STATS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: ['stats', EPOCH_POINT_STATS_MAP.LITE_TO_FULL]
  }
})
