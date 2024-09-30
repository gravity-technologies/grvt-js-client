import { type SchemaPairMap } from './types'
import { FILL_MAP } from './flat_private_trade'

// Schema map for the 'API_FILL_HISTORY_RESPONSE' struct.
export const API_FILL_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [FILL_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['results', [FILL_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
