import { type SchemaPairMap } from './types'
import { API_VAULT_SUB_ACCOUNT_SUMMARY_MAP } from './api_vault_sub_account_summary'

// Schema map for the 'API_QUERY_LIST_VAULT_SUB_ACCOUNT_SUMMARY_RESPONSE' struct.
export const API_QUERY_LIST_VAULT_SUB_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [API_VAULT_SUB_ACCOUNT_SUMMARY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [API_VAULT_SUB_ACCOUNT_SUMMARY_MAP.LITE_TO_FULL]]
  }
})
