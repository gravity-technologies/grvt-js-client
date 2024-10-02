import { type SchemaPairMap } from './types'
import { SUB_ACCOUNT_MAP } from './snap_sub_account'

// Schema map for the 'API_LATEST_SNAP_SUB_ACCOUNTS_RESPONSE' struct.
export const API_LATEST_SNAP_SUB_ACCOUNTS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [SUB_ACCOUNT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [SUB_ACCOUNT_MAP.LITE_TO_FULL]]
  }
})
