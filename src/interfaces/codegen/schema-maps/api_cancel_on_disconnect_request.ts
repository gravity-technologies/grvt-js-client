import { type SchemaPairMap } from './types'

// Schema map for the 'API_CANCEL_ON_DISCONNECT_REQUEST' struct.
export const API_CANCEL_ON_DISCONNECT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    countdown_time: 'ct'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    ct: 'countdown_time'
  }
})
