import { type SchemaPairMap } from './types'

// Schema map for the 'API_USER_CATEGORY_AFFINITY_SCORE_REQUEST' struct.
export const API_USER_CATEGORY_AFFINITY_SCORE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    ai: 'account_id',
    st: 'start_time',
    et: 'end_time'
  }
})
