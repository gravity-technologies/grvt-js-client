import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_VAULT_SUMMARY_HISTORY_REQUEST' struct.
export const API_QUERY_VAULT_SUMMARY_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    time_interval: 'ti'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    ti: 'time_interval'
  }
})
