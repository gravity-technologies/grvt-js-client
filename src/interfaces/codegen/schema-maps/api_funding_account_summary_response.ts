import { type SchemaPairMap } from './types'
import { FUNDING_ACCOUNT_SUMMARY_MAP } from './funding_account_summary'

// Schema map for the 'API_FUNDING_ACCOUNT_SUMMARY_RESPONSE' struct.
export const API_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', FUNDING_ACCOUNT_SUMMARY_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', FUNDING_ACCOUNT_SUMMARY_MAP.LITE_TO_FULL]
  }
})
