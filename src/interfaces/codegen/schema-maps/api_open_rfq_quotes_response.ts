import { type SchemaPairMap } from './types'
import { RFQ_QUOTE_MAP } from './rfq_quote'

// Schema map for the 'API_OPEN_RFQ_QUOTES_RESPONSE' struct.
export const API_OPEN_RFQ_QUOTES_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_quotes: ['rq', [RFQ_QUOTE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    rq: ['rfq_quotes', [RFQ_QUOTE_MAP.LITE_TO_FULL]]
  }
})
