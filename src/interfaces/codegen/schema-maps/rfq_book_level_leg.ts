import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'
import { RFQ_BOOK_QUOTE_MAP } from './rfq_book_quote'

// Schema map for the 'RFQ_BOOK_LEVEL_LEG' struct.
export const RFQ_BOOK_LEVEL_LEG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    quotes: ['q', [RFQ_BOOK_QUOTE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    q: ['quotes', [RFQ_BOOK_QUOTE_MAP.LITE_TO_FULL]]
  }
})
