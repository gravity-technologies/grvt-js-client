import { type SchemaPairMap } from './types'
import { POSITION_SUMMARY_MAP } from './position_summary'

// Schema map for the 'API_QUERY_SNAP_VAULT_POSITION_RESPONSE' struct.
export const API_QUERY_SNAP_VAULT_POSITION_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    positions: ['p', [POSITION_SUMMARY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    p: ['positions', [POSITION_SUMMARY_MAP.LITE_TO_FULL]]
  }
})
