import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_LIST_FLAT_REFERRAL_REQUEST' struct.
export const API_GET_LIST_FLAT_REFERRAL_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    referral_id: 'ri',
    start_time: 'st',
    end_time: 'et',
    account_id: 'ai'
  },
  LITE_TO_FULL: {
    ri: 'referral_id',
    st: 'start_time',
    et: 'end_time',
    ai: 'account_id'
  }
})
