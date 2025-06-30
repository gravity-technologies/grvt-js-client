import { type SchemaPairMap } from './types'

// Schema map for the 'API_BATCH_QUERY_VAULT_DETAIL_REQUEST' struct.
export const API_BATCH_QUERY_VAULT_DETAIL_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_i_ds: 'vi'
  },
  LITE_TO_FULL: {
    vi: 'vault_i_ds'
  }
})
