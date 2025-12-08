import { type SchemaPairMap } from './types'
import { BUILDER_FILL_HISTORY_MAP } from './builder_fill_history'

// Schema map for the 'API_BUILDER_FILL_HISTORY_RESPONSE' struct.
export const API_BUILDER_FILL_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [BUILDER_FILL_HISTORY_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [BUILDER_FILL_HISTORY_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
