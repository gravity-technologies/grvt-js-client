import { type SchemaPairMap } from './types'
import { RFQ_BOOK_QUOTE_MAP } from './rfq_book_quote'

// Schema map for the 'RFQ_BOOK_LEVEL_LEG' struct.
export const RFQ_BOOK_LEVEL_LEG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    quotes: ['q', [RFQ_BOOK_QUOTE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    i: 'instrument',
    q: ['quotes', [RFQ_BOOK_QUOTE_MAP.LITE_TO_FULL]]
  }
})
