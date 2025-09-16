import { type SchemaPairMap } from './types'
import { REWARD_REFERRAL_POINT_MAP } from './reward_referral_point'

// Schema map for the 'QUERY_REWARD_REFERRAL_POINT_RESPONSE' struct.
export const QUERY_REWARD_REFERRAL_POINT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [REWARD_REFERRAL_POINT_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [REWARD_REFERRAL_POINT_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
