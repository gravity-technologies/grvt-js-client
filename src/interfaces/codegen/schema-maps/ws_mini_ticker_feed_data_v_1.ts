import { type SchemaPairMap } from './types'
import { MINI_TICKER_MAP } from './mini_ticker'

// Schema map for the 'WS_MINI_TICKER_FEED_DATA_V_1' struct.
export const WS_MINI_TICKER_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', MINI_TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', MINI_TICKER_MAP.LITE_TO_FULL]
  }
})
