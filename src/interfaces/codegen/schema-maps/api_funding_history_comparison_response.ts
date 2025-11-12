import { type SchemaPairMap } from './types'
import { FUNDING_HISTORY_COMPARISON_ENTRY_MAP } from './funding_history_comparison_entry'

// Schema map for the 'API_FUNDING_HISTORY_COMPARISON_RESPONSE' struct.
export const API_FUNDING_HISTORY_COMPARISON_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    entries: ['e', [FUNDING_HISTORY_COMPARISON_ENTRY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    i: 'instrument',
    e: ['entries', [FUNDING_HISTORY_COMPARISON_ENTRY_MAP.LITE_TO_FULL]]
  }
})
