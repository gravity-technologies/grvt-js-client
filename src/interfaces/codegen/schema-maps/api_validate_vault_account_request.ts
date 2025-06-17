import { type SchemaPairMap } from './types'

// Schema map for the 'API_VALIDATE_VAULT_ACCOUNT_REQUEST' struct.
export const API_VALIDATE_VAULT_ACCOUNT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_i_ds: 'vi'
  },
  LITE_TO_FULL: {
    vi: 'vault_i_ds'
  }
})
