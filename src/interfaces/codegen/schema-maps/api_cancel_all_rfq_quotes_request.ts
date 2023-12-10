import { type SchemaPairMap } from './types'

// Schema map for the 'API_CANCEL_ALL_RFQ_QUOTES_REQUEST' struct.
export const API_CANCEL_ALL_RFQ_QUOTES_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})
