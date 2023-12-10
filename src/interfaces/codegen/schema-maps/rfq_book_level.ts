import { type SchemaPairMap } from './types'
import { RFQ_BOOK_LEVEL_LEG_MAP } from './rfq_book_level_leg'

// Schema map for the 'RFQ_BOOK_LEVEL' struct.
export const RFQ_BOOK_LEVEL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    level_expiration: 'le',
    level_price: 'lp',
    lots: 'l',
    legs: ['l1', [RFQ_BOOK_LEVEL_LEG_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    le: 'level_expiration',
    lp: 'level_price',
    l: 'lots',
    l1: ['legs', [RFQ_BOOK_LEVEL_LEG_MAP.LITE_TO_FULL]]
  }
})
