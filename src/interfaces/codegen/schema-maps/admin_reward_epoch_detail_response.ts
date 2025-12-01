import { type SchemaPairMap } from './types'
import { ADMIN_REWARD_EPOCH_DETAIL_MAP } from './admin_reward_epoch_detail'

// Schema map for the 'ADMIN_REWARD_EPOCH_DETAIL_RESPONSE' struct.
export const ADMIN_REWARD_EPOCH_DETAIL_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', ADMIN_REWARD_EPOCH_DETAIL_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', ADMIN_REWARD_EPOCH_DETAIL_MAP.LITE_TO_FULL]
  }
})
