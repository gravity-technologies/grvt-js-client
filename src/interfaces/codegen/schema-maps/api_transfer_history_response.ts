import { type SchemaPairMap } from './types'
import { TRANSFER_HISTORY_MAP } from './transfer_history'

// Schema map for the 'API_TRANSFER_HISTORY_RESPONSE' struct.
export const API_TRANSFER_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total: 't',
    next: 'n',
    results: ['r', [TRANSFER_HISTORY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    t: 'total',
    n: 'next',
    r: ['results', [TRANSFER_HISTORY_MAP.LITE_TO_FULL]]
  }
})
