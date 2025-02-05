import { type SchemaPairMap } from './types'
import { REWARD_EPOCH_INFO_MAP } from './reward_epoch_info'

// Schema map for the 'API_GET_LIST_REWARD_EPOCH_RESPONSE' struct.
export const API_GET_LIST_REWARD_EPOCH_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    ecosystem_epochs: ['ee', [REWARD_EPOCH_INFO_MAP.FULL_TO_LITE]],
    trading_epochs: ['te', [REWARD_EPOCH_INFO_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    ee: ['ecosystem_epochs', [REWARD_EPOCH_INFO_MAP.LITE_TO_FULL]],
    te: ['trading_epochs', [REWARD_EPOCH_INFO_MAP.LITE_TO_FULL]]
  }
})
