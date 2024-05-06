import { type SchemaPairMap } from './types'
import { CANDLESTICK_MAP } from './candlestick'

// Schema map for the 'WS_CANDLESTICK_FEED_DATA_V_1' struct.
export const WS_CANDLESTICK_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', CANDLESTICK_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', CANDLESTICK_MAP.LITE_TO_FULL]
  }
})
