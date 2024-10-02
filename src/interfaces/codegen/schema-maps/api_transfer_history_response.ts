import { type SchemaPairMap } from './types'
import { TRANSFER_HISTORY_MAP } from './transfer_history'

// Schema map for the 'API_TRANSFER_HISTORY_RESPONSE' struct.
export const API_TRANSFER_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [TRANSFER_HISTORY_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [TRANSFER_HISTORY_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
