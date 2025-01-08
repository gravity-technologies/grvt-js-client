import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ALL_INITIAL_LEVERAGE_REQUEST' struct.
export const API_GET_ALL_INITIAL_LEVERAGE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id'
  }
})
