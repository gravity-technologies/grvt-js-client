import { type SchemaPairMap } from './types'
import { WITHDRAWAL_HISTORY_MAP } from './withdrawal_history'

// Schema map for the 'API_WITHDRAWAL_HISTORY_RESPONSE' struct.
export const API_WITHDRAWAL_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [WITHDRAWAL_HISTORY_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [WITHDRAWAL_HISTORY_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
