import { type SchemaPairMap } from './types'
import { RFQ_QUOTE_MAP } from './rfq_quote'

// Schema map for the 'API_CREATE_RFQ_QUOTE_RESPONSE' struct.
export const API_CREATE_RFQ_QUOTE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_quote: ['rq', RFQ_QUOTE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    rq: ['rfq_quote', RFQ_QUOTE_MAP.LITE_TO_FULL]
  }
})
