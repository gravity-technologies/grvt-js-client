import { type SchemaPairMap } from './types'
import { RFQ_MAP } from './rfq'

// Schema map for the 'API_CREATE_RFQ_REQUEST' struct.
export const API_CREATE_RFQ_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq: ['r', RFQ_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['rfq', RFQ_MAP.LITE_TO_FULL]
  }
})
