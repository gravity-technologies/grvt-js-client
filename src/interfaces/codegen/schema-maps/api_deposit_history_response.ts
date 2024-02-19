import { type SchemaPairMap } from './types'
import { DEPOSIT_HISTORY_MAP } from './deposit_history'

// Schema map for the 'API_DEPOSIT_HISTORY_RESPONSE' struct.
export const API_DEPOSIT_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total: 't',
    next: 'n',
    results: ['r', [DEPOSIT_HISTORY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    t: 'total',
    n: 'next',
    r: ['results', [DEPOSIT_HISTORY_MAP.LITE_TO_FULL]]
  }
})
