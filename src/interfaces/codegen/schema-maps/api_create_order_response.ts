import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'API_CREATE_ORDER_RESPONSE' struct.
export const API_CREATE_ORDER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    o: ['order', ORDER_MAP.LITE_TO_FULL]
  }
})
