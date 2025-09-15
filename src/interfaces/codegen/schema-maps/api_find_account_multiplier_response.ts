import { type SchemaPairMap } from './types'
import { REWARD_ACCOUNT_MULTIPLIER_MAP } from './reward_account_multiplier'

// Schema map for the 'API_FIND_ACCOUNT_MULTIPLIER_RESPONSE' struct.
export const API_FIND_ACCOUNT_MULTIPLIER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [REWARD_ACCOUNT_MULTIPLIER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [REWARD_ACCOUNT_MULTIPLIER_MAP.LITE_TO_FULL]]
  }
})
