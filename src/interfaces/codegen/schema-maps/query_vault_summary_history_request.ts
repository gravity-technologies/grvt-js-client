import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_VAULT_SUMMARY_HISTORY_REQUEST' struct.
export const QUERY_VAULT_SUMMARY_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    start_time: 'st',
    end_time: 'et',
    time_interval: 'ti'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    st: 'start_time',
    et: 'end_time',
    ti: 'time_interval'
  }
})
