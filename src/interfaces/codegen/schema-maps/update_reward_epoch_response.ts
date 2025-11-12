import { type SchemaPairMap } from './types'
import { ADMIN_REWARD_EPOCH_MAP } from './admin_reward_epoch'

// Schema map for the 'UPDATE_REWARD_EPOCH_RESPONSE' struct.
export const UPDATE_REWARD_EPOCH_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', ADMIN_REWARD_EPOCH_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', ADMIN_REWARD_EPOCH_MAP.LITE_TO_FULL]
  }
})
