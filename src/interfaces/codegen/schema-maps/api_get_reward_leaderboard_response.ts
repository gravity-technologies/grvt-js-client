import { type SchemaPairMap } from './types'
import { API_REWARD_LEADERBOARD_ITEM_MAP } from './api_reward_leaderboard_item'

// Schema map for the 'API_GET_REWARD_LEADERBOARD_RESPONSE' struct.
export const API_GET_REWARD_LEADERBOARD_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [API_REWARD_LEADERBOARD_ITEM_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [API_REWARD_LEADERBOARD_ITEM_MAP.LITE_TO_FULL]]
  }
})
