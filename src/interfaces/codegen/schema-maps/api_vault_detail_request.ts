import { type SchemaPairMap } from './types'

// Schema map for the 'API_VAULT_DETAIL_REQUEST' struct.
export const API_VAULT_DETAIL_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi'
  },
  LITE_TO_FULL: {
    vi: 'vault_id'
  }
})
