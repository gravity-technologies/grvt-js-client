import { type SchemaPairMap } from './types'
import { ORDER_STATE_MAP } from './order_state'

// Schema map for the 'WS_ORDER_STATE_RESPONSE' struct.
export const WS_ORDER_STATE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', ORDER_STATE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', ORDER_STATE_MAP.LITE_TO_FULL]
  }
})
