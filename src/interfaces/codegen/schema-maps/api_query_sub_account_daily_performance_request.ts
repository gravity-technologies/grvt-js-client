import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_SUB_ACCOUNT_DAILY_PERFORMANCE_REQUEST' struct.
export const API_QUERY_SUB_ACCOUNT_DAILY_PERFORMANCE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    currency: 'c',
    sub_account_id: 'sa',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    c: 'currency',
    sa: 'sub_account_id',
    st: 'start_time',
    et: 'end_time'
  }
})
