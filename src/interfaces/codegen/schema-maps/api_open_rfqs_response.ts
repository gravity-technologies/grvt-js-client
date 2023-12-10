import { type SchemaPairMap } from './types'
import { RFQ_MAP } from './rfq'

// Schema map for the 'API_OPEN_RFQS_RESPONSE' struct.
export const API_OPEN_RFQS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfqs: ['r', [RFQ_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['rfqs', [RFQ_MAP.LITE_TO_FULL]]
  }
})
