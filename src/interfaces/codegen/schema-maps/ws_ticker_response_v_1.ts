import { type SchemaPairMap } from './types'
import { TICKER_MAP } from './snap_ticker'

// Schema map for the 'WS_TICKER_RESPONSE_V_1' struct.
export const WS_TICKER_RESPONSE_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', TICKER_MAP.LITE_TO_FULL]
  }
})
