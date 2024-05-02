import { type SchemaPairMap } from './types'
import { RFQ_MAP } from './rfq'

// Schema map for the 'WS_RFQ_RESPONSE_V_1' struct.
export const WS_RFQ_RESPONSE_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', RFQ_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', RFQ_MAP.LITE_TO_FULL]
  }
})
