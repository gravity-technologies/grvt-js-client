import { type SchemaPairMap } from './types'
import { SNAP_SUB_ACCOUNT_SUMMARY_MAP } from './snap_sub_account_summary'

// Schema map for the 'QUERY_LATEST_SUB_ACCOUNT_SUMMARY_RESPONSE' struct.
export const QUERY_LATEST_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', SNAP_SUB_ACCOUNT_SUMMARY_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', SNAP_SUB_ACCOUNT_SUMMARY_MAP.LITE_TO_FULL]
  }
})
