import { type SchemaPairMap } from './types'
import { FLAT_REFERRAL_MAP } from './flat_referral'

// Schema map for the 'API_GET_LIST_FLAT_REFERRAL_RESPONSE' struct.
export const API_GET_LIST_FLAT_REFERRAL_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    flat_referrals: ['fr', [FLAT_REFERRAL_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    fr: ['flat_referrals', [FLAT_REFERRAL_MAP.LITE_TO_FULL]]
  }
})
