import { type SchemaPairMap } from './types'
import { LIVE_FUNDING_RATE_COMPARISON_ENTRY_MAP } from './live_funding_rate_comparison_entry'

// Schema map for the 'API_LIVE_FUNDING_RATE_COMPARISON_RESPONSE' struct.
export const API_LIVE_FUNDING_RATE_COMPARISON_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    entries: ['e', [LIVE_FUNDING_RATE_COMPARISON_ENTRY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    e: ['entries', [LIVE_FUNDING_RATE_COMPARISON_ENTRY_MAP.LITE_TO_FULL]]
  }
})
