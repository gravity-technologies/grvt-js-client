import { type SchemaPairMap } from './types'
import { RFQ_MAP } from './rfq'

// Schema map for the 'API_CANCEL_RFQ_RESPONSE' struct.
export const API_CANCEL_RFQ_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq: ['r', RFQ_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['rfq', RFQ_MAP.LITE_TO_FULL]
  }
})
