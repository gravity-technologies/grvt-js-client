import { type SchemaPairMap } from './types'
import { LITE_SNAP_VAULT_SUMMARY_MAP } from './snap_vault_summary_lite'

// Schema map for the 'QUERY_LATEST_VAULT_SNAPSHOTS_RESPONSE' struct.
export const QUERY_LATEST_VAULT_SNAPSHOTS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [LITE_SNAP_VAULT_SUMMARY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [LITE_SNAP_VAULT_SUMMARY_MAP.LITE_TO_FULL]]
  }
})
