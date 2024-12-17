import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_FLAT_REFERRAL_STAT_RESPONSE' struct.
export const API_QUERY_FLAT_REFERRAL_STAT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    direct_invite_count: 'di',
    indirect_invite_count: 'ii'
  },
  LITE_TO_FULL: {
    di: 'direct_invite_count',
    ii: 'indirect_invite_count'
  }
})
