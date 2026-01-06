import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_VAULT_SUMMARY_HISTORY_REQUEST' struct.
export const API_QUERY_VAULT_SUMMARY_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    time_interval: 'ti',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    ti: 'time_interval',
    st: 'start_time',
    et: 'end_time'
  }
})
