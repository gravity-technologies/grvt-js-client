import { type SchemaPairMap } from './types'
import { DEPOSIT_HISTORY_MAP } from './deposit_history'

// Schema map for the 'API_DEPOSIT_HISTORY_RESPONSE' struct.
export const API_DEPOSIT_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [DEPOSIT_HISTORY_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [DEPOSIT_HISTORY_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
