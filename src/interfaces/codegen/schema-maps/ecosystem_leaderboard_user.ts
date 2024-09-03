import { type SchemaPairMap } from './types'

// Schema map for the 'ECOSYSTEM_LEADERBOARD_USER' struct.
export const ECOSYSTEM_LEADERBOARD_USER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai',
    rank: 'r',
    total_point: 'tp',
    twitter_username: 'tu'
  },
  LITE_TO_FULL: {
    ai: 'account_id',
    r: 'rank',
    tp: 'total_point',
    tu: 'twitter_username'
  }
})
