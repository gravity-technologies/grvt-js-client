import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_VAULT_INVESTOR_HISTORY_REQUEST' struct.
export const API_QUERY_VAULT_INVESTOR_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    st: 'start_time',
    et: 'end_time'
  }
})
