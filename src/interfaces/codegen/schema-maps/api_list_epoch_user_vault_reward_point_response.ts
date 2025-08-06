import { type SchemaPairMap } from './types'
import { EPOCH_USER_VAULT_REWARD_POINT_MAP } from './epoch_user_vault_reward_point'

// Schema map for the 'API_LIST_EPOCH_USER_VAULT_REWARD_POINT_RESPONSE' struct.
export const API_LIST_EPOCH_USER_VAULT_REWARD_POINT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [EPOCH_USER_VAULT_REWARD_POINT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [EPOCH_USER_VAULT_REWARD_POINT_MAP.LITE_TO_FULL]]
  }
})
