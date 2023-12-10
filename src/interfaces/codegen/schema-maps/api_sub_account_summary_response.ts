import { type SchemaPairMap } from './types'
import { SUB_ACCOUNT_MAP } from './snap_sub_account'

// Schema map for the 'API_SUB_ACCOUNT_SUMMARY_RESPONSE' struct.
export const API_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', SUB_ACCOUNT_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['results', SUB_ACCOUNT_MAP.LITE_TO_FULL]
  }
})
