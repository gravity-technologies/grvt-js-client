import { type SchemaPairMap } from './types'
import { ORDERBOOK_LEVELS_MAP } from './snap_orderbook_levels'

// Schema map for the 'WS_ORDERBOOK_LEVELS_RESPONSE_V_1' struct.
export const WS_ORDERBOOK_LEVELS_RESPONSE_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', ORDERBOOK_LEVELS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', ORDERBOOK_LEVELS_MAP.LITE_TO_FULL]
  }
})
