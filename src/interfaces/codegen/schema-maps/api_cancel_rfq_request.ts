import { type SchemaPairMap } from './types'

// Schema map for the 'API_CANCEL_RFQ_REQUEST' struct.
export const API_CANCEL_RFQ_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    rfq_id: 'ri'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    ri: 'rfq_id'
  }
})
