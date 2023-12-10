import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'RFQ_QUOTE' struct.
export const RFQ_QUOTE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_id: 'ri',
    is_anonymous: 'ia',
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    ri: 'rfq_id',
    ia: 'is_anonymous',
    o: ['order', ORDER_MAP.LITE_TO_FULL]
  }
})
