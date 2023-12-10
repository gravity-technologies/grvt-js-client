import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'API_TRADE_RFQ_RESPONSE' struct.
export const API_TRADE_RFQ_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_id: 'ri',
    order: ['o', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    ri: 'rfq_id',
    o: ['order', ORDER_MAP.LITE_TO_FULL]
  }
})
