import { type SchemaPairMap } from './types'
import { WITHDRAWAL_HISTORY_MAP } from './withdrawal_history'

// Schema map for the 'API_WITHDRAWAL_HISTORY_RESPONSE' struct.
export const API_WITHDRAWAL_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total: 't',
    next: 'n',
    results: ['r', [WITHDRAWAL_HISTORY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    t: 'total',
    n: 'next',
    r: ['results', [WITHDRAWAL_HISTORY_MAP.LITE_TO_FULL]]
  }
})
