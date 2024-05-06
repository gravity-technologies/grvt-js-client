import { type SchemaPairMap } from './types'
import { RFQ_QUOTE_MAP } from './rfq_quote'

// Schema map for the 'WS_RFQ_QUOTE_FEED_DATA_V_1' struct.
export const WS_RFQ_QUOTE_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', RFQ_QUOTE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', RFQ_QUOTE_MAP.LITE_TO_FULL]
  }
})
