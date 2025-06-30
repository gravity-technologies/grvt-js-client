import { type SchemaPairMap } from './types'
import { API_VAULT_DETAIL_MAP } from './api_vault_detail'

// Schema map for the 'API_BATCH_QUERY_VAULT_DETAIL_RESPONSE' struct.
export const API_BATCH_QUERY_VAULT_DETAIL_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [API_VAULT_DETAIL_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [API_VAULT_DETAIL_MAP.LITE_TO_FULL]]
  }
})
