import { type SchemaPairMap } from './types'
import { ORDER_STATE_MAP } from './order_state'

// Schema map for the 'WS_ORDER_STATE_RESPONSE_V_1' struct.
export const WS_ORDER_STATE_RESPONSE_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', ORDER_STATE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', ORDER_STATE_MAP.LITE_TO_FULL]
  }
})
