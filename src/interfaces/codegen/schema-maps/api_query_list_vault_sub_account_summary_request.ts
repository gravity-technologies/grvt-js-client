import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_LIST_VAULT_SUB_ACCOUNT_SUMMARY_REQUEST' struct.
export const API_QUERY_LIST_VAULT_SUB_ACCOUNT_SUMMARY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    time_interval: 'ti'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    ti: 'time_interval'
  }
})
