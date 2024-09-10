import { type SchemaPairMap } from './types'
import { ECOSYSTEM_LEADERBOARD_USER_MAP } from './ecosystem_leaderboard_user'

// Schema map for the 'API_FIND_ECOSYSTEM_LEADERBOARD_RESPONSE' struct.
export const API_FIND_ECOSYSTEM_LEADERBOARD_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    users: ['u', [ECOSYSTEM_LEADERBOARD_USER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    u: ['users', [ECOSYSTEM_LEADERBOARD_USER_MAP.LITE_TO_FULL]]
  }
})
