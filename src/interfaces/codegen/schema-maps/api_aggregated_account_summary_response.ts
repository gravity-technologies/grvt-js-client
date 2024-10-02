import { type SchemaPairMap } from './types'
import { AGGREGATED_ACCOUNT_SUMMARY_MAP } from './aggregated_account_summary'

// Schema map for the 'API_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE' struct.
export const API_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', AGGREGATED_ACCOUNT_SUMMARY_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', AGGREGATED_ACCOUNT_SUMMARY_MAP.LITE_TO_FULL]
  }
})
