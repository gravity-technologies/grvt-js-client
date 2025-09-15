import { type SchemaPairMap } from './types'

// Schema map for the 'API_FIRST_SESSION_REWARD_RESPONSE' struct.
export const API_FIRST_SESSION_REWARD_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    locked_airdrop_token_ratio: 'la',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    la: 'locked_airdrop_token_ratio',
    et: 'end_time'
  }
})
