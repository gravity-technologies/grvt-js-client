import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'API_ORDER_HISTORY_RESPONSE' struct.
export const API_ORDER_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [ORDER_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [ORDER_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
