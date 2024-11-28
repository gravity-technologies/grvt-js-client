import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'API_PRE_ORDER_CHECK_REQUEST' struct.
export const API_PRE_ORDER_CHECK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    o: ['order', ORDER_MAP.LITE_TO_FULL]
  }
})
