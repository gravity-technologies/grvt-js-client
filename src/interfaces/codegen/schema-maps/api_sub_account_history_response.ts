import { type SchemaPairMap } from './types'
import { SUB_ACCOUNT_MAP } from './snap_sub_account'

// Schema map for the 'API_SUB_ACCOUNT_HISTORY_RESPONSE' struct.
export const API_SUB_ACCOUNT_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total: 't',
    next: 'n',
    results: ['r', [SUB_ACCOUNT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    t: 'total',
    n: 'next',
    r: ['results', [SUB_ACCOUNT_MAP.LITE_TO_FULL]]
  }
})
