import { type SchemaPairMap } from './types'

// Schema map for the 'API_CANCEL_RFQ_QUOTE_REQUEST' struct.
export const API_CANCEL_RFQ_QUOTE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    quote_id: 'qi',
    client_quote_id: 'cq'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    qi: 'quote_id',
    cq: 'client_quote_id'
  }
})
