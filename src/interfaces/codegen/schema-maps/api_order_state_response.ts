import { type SchemaPairMap } from './types'
import { ORDER_STATE_MAP } from './order_state'

// Schema map for the 'API_ORDER_STATE_RESPONSE' struct.
export const API_ORDER_STATE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    state: ['s', ORDER_STATE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: ['state', ORDER_STATE_MAP.LITE_TO_FULL]
  }
})
