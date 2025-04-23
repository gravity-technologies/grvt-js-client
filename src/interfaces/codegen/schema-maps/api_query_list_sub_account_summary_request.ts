import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_LIST_SUB_ACCOUNT_SUMMARY_REQUEST' struct.
export const API_QUERY_LIST_SUB_ACCOUNT_SUMMARY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    time_interval: 'ti',
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    ti: 'time_interval',
    sa: 'sub_account_id'
  }
})
