import { type SchemaPairMap } from './types'
import { API_VAULT_INVESTOR_HISTORY_MAP } from './api_vault_investor_history'

// Schema map for the 'API_QUERY_VAULT_MANAGER_INVESTOR_HISTORY_RESPONSE' struct.
export const API_QUERY_VAULT_MANAGER_INVESTOR_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [API_VAULT_INVESTOR_HISTORY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [API_VAULT_INVESTOR_HISTORY_MAP.LITE_TO_FULL]]
  }
})
