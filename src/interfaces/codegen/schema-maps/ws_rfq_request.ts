import { type SchemaPairMap } from './types'

// Schema map for the 'WS_RFQ_REQUEST' struct.
export const WS_RFQ_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})
