import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'API_ORDER_HISTORY_RESPONSE' struct.
export const API_ORDER_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total: 't',
    next: 'n',
    orders: ['o', [ORDER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    t: 'total',
    n: 'next',
    o: ['orders', [ORDER_MAP.LITE_TO_FULL]]
  }
})
