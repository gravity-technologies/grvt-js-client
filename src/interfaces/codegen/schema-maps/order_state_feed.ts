import { type SchemaPairMap } from './types'
import { ORDER_STATE_MAP } from './order_state'

// Schema map for the 'ORDER_STATE_FEED' struct.
export const ORDER_STATE_FEED_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    order_id: 'oi',
    order_state: ['os', ORDER_STATE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    oi: 'order_id',
    os: ['order_state', ORDER_STATE_MAP.LITE_TO_FULL]
  }
})
