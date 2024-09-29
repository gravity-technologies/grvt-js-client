import { type SchemaPairMap } from './types'

// Schema map for the 'API_SUB_ACCOUNT_HISTORY_REQUEST' struct.
export const API_SUB_ACCOUNT_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    start_time: 'st',
    end_time: 'et',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    st: 'start_time',
    et: 'end_time',
    l: 'limit',
    c: 'cursor'
  }
})
