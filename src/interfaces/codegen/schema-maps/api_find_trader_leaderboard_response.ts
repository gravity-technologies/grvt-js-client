import { type SchemaPairMap } from './types'
import { TRADER_LEADERBOARD_USER_MAP } from './trader_leaderboard_user'

// Schema map for the 'API_FIND_TRADER_LEADERBOARD_RESPONSE' struct.
export const API_FIND_TRADER_LEADERBOARD_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    users: ['u', [TRADER_LEADERBOARD_USER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    u: ['users', [TRADER_LEADERBOARD_USER_MAP.LITE_TO_FULL]]
  }
})
