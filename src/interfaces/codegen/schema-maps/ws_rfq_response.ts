import { type SchemaPairMap } from './types'
import { RFQ_MAP } from './rfq'

// Schema map for the 'WS_RFQ_RESPONSE' struct.
export const WS_RFQ_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', RFQ_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', RFQ_MAP.LITE_TO_FULL]
  }
})
