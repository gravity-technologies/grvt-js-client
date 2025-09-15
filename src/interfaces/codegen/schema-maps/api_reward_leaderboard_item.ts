import { type SchemaPairMap } from './types'

// Schema map for the 'API_REWARD_LEADERBOARD_ITEM' struct.
export const API_REWARD_LEADERBOARD_ITEM_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    off_chain_account_id: 'oc',
    twitter_username: 'tu',
    rank: 'r',
    point: 'p'
  },
  LITE_TO_FULL: {
    oc: 'off_chain_account_id',
    tu: 'twitter_username',
    r: 'rank',
    p: 'point'
  }
})
