import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ECOSYSTEM_LEADERBOARD_REQUEST' struct.
export const API_GET_ECOSYSTEM_LEADERBOARD_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    calculate_from: 'cf',
    limit: 'l'
  },
  LITE_TO_FULL: {
    cf: 'calculate_from',
    l: 'limit'
  }
})
