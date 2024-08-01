import { type SchemaPairMap } from './types'

// Schema map for the 'API_LATEST_SNAP_SUB_ACCOUNTS_REQUEST' struct.
export const API_LATEST_SNAP_SUB_ACCOUNTS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_i_ds: 'sa'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_i_ds'
  }
})
