import { type SchemaPairMap } from './types'
import { SUB_ACCOUNT_MAP } from './snap_sub_account'

// Schema map for the 'API_SUB_ACCOUNT_HISTORY_RESPONSE' struct.
export const API_SUB_ACCOUNT_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [SUB_ACCOUNT_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [SUB_ACCOUNT_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
