import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_LP_LEADERBOARD_REQUEST' struct.
export const API_GET_LP_LEADERBOARD_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    limit: 'l',
    kind: 'k',
    base: 'b'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    l: 'limit',
    k: 'kind',
    b: 'base'
  }
})
