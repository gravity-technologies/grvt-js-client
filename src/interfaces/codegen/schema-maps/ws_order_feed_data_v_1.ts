import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'WS_ORDER_FEED_DATA_V_1' struct.
export const WS_ORDER_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    selector: 's1',
    sequence_number: 'sn',
    feed: ['f', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'selector',
    sn: 'sequence_number',
    f: ['feed', ORDER_MAP.LITE_TO_FULL]
  }
})
