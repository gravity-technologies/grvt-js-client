import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_LATEST_SUB_ACCOUNT_SUMMARY_REQUEST' struct.
export const QUERY_LATEST_SUB_ACCOUNT_SUMMARY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})
