import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'
import { ACK_MAP } from './ack'

// Schema map for the 'API_BULK_ORDERS_RESPONSE' struct.
export const API_BULK_ORDERS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    orders: ['o', [ORDER_MAP.FULL_TO_LITE]],
    cancel_acks: ['ca', [ACK_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    o: ['orders', [ORDER_MAP.LITE_TO_FULL]],
    ca: ['cancel_acks', [ACK_MAP.LITE_TO_FULL]]
  }
})
