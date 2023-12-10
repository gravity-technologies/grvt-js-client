import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'API_OPEN_ORDERS_RESPONSE' struct.
export const API_OPEN_ORDERS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    orders: ['o', [ORDER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    o: ['orders', [ORDER_MAP.LITE_TO_FULL]]
  }
})
