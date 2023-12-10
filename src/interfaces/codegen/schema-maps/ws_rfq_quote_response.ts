import { type SchemaPairMap } from './types'
import { RFQ_QUOTE_MAP } from './rfq_quote'

// Schema map for the 'WS_RFQ_QUOTE_RESPONSE' struct.
export const WS_RFQ_QUOTE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', RFQ_QUOTE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', RFQ_QUOTE_MAP.LITE_TO_FULL]
  }
})
