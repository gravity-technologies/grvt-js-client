import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_FIRST_VAULT_SNAPSHOTS_REQUEST' struct.
export const QUERY_FIRST_VAULT_SNAPSHOTS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_i_ds: 'vi'
  },
  LITE_TO_FULL: {
    vi: 'vault_i_ds'
  }
})
