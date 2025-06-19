import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_VAULT_MANAGER_INVESTOR_HISTORY_REQUEST' struct.
export const API_QUERY_VAULT_MANAGER_INVESTOR_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    only_own_investments: 'oo'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    oo: 'only_own_investments'
  }
})
