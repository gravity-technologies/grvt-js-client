import { type SchemaPairMap } from './types'
import { SNAP_VAULT_SUMMARY_MAP } from './snap_vault_summary'

// Schema map for the 'QUERY_VAULT_SUMMARY_HISTORY_RESPONSE' struct.
export const QUERY_VAULT_SUMMARY_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [SNAP_VAULT_SUMMARY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [SNAP_VAULT_SUMMARY_MAP.LITE_TO_FULL]]
  }
})
