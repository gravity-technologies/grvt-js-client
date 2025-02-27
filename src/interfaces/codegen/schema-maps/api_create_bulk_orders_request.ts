import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'API_CREATE_BULK_ORDERS_REQUEST' struct.
export const API_CREATE_BULK_ORDERS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    orders: ['o', [ORDER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    o: ['orders', [ORDER_MAP.LITE_TO_FULL]]
  }
})
