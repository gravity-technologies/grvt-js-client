import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_FLAT_REFERRAL_STAT_REQUEST' struct.
export const API_QUERY_FLAT_REFERRAL_STAT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai'
  },
  LITE_TO_FULL: {
    ai: 'account_id'
  }
})
