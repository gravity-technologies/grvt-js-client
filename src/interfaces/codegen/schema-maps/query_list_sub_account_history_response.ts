import { type SchemaPairMap } from './types'
import { SNAP_SUB_ACCOUNT_HISTORY_MAP } from './snap_sub_account_history'

// Schema map for the 'QUERY_LIST_SUB_ACCOUNT_HISTORY_RESPONSE' struct.
export const QUERY_LIST_SUB_ACCOUNT_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [SNAP_SUB_ACCOUNT_HISTORY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [SNAP_SUB_ACCOUNT_HISTORY_MAP.LITE_TO_FULL]]
  }
})
