import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_LP_LEADERBOARD_REQUEST' struct.
export const API_GET_LP_LEADERBOARD_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    limit: 'l',
    kind: 'k',
    underlying: 'u'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    l: 'limit',
    k: 'kind',
    u: 'underlying'
  }
})
