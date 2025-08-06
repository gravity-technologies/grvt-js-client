import { type SchemaPairMap } from './types'
import { API_DETAILED_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP } from './api_detailed_aggregated_account_summary_response'

// Schema map for the 'API_LIST_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE' struct.
export const API_LIST_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_summaries: ['as', [API_DETAILED_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    as: ['account_summaries', [API_DETAILED_AGGREGATED_ACCOUNT_SUMMARY_RESPONSE_MAP.LITE_TO_FULL]]
  }
})
