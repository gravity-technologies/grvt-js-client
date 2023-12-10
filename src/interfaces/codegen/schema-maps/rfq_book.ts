import { type SchemaPairMap } from './types'
import { RFQ_BOOK_QUOTE_MAP } from './rfq_book_quote'
import { RFQ_BOOK_LEVEL_MAP } from './rfq_book_level'

// Schema map for the 'RFQ_BOOK' struct.
export const RFQ_BOOK_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    full: ['f', [RFQ_BOOK_QUOTE_MAP.FULL_TO_LITE]],
    partial: ['p', [RFQ_BOOK_LEVEL_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    f: ['full', [RFQ_BOOK_QUOTE_MAP.LITE_TO_FULL]],
    p: ['partial', [RFQ_BOOK_LEVEL_MAP.LITE_TO_FULL]]
  }
})
