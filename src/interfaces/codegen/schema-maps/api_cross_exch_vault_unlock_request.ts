import { type SchemaPairMap } from './types'

// Schema map for the 'API_CROSS_EXCH_VAULT_UNLOCK_REQUEST' struct.
export const API_CROSS_EXCH_VAULT_UNLOCK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    cross_exch_vault_id: 'ce'
  },
  LITE_TO_FULL: {
    ce: 'cross_exch_vault_id'
  }
})
