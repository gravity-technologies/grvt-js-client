import { type SchemaPairMap } from './types'
import { DETAIL_ADMIN_REWARD_EPOCH_MAP } from './detail_admin_reward_epoch'

// Schema map for the 'DETAIL_ADMIN_REWARD_EPOCH_RESPONSE' struct.
export const DETAIL_ADMIN_REWARD_EPOCH_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', DETAIL_ADMIN_REWARD_EPOCH_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', DETAIL_ADMIN_REWARD_EPOCH_MAP.LITE_TO_FULL]
  }
})
