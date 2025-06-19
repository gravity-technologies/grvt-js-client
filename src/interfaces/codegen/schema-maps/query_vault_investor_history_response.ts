import { type SchemaPairMap } from './types'
import { VAULT_INVESTOR_HISTORY_MAP } from './vault_investor_history'

// Schema map for the 'QUERY_VAULT_INVESTOR_HISTORY_RESPONSE' struct.
export const QUERY_VAULT_INVESTOR_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [VAULT_INVESTOR_HISTORY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [VAULT_INVESTOR_HISTORY_MAP.LITE_TO_FULL]]
  }
})
