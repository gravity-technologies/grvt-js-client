import { type SchemaPairMap } from './types'
import { SNAP_FUNDING_ACCOUNT_SUMMARY_MAP } from './snap_funding_account_summary'

// Schema map for the 'API_QUERY_LIST_FUNDING_ACCOUNT_SUMMARY_RESPONSE' struct.
export const API_QUERY_LIST_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [SNAP_FUNDING_ACCOUNT_SUMMARY_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [SNAP_FUNDING_ACCOUNT_SUMMARY_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
