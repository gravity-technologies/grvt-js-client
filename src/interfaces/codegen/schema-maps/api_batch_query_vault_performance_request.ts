import { type SchemaPairMap } from './types'

// Schema map for the 'API_BATCH_QUERY_VAULT_PERFORMANCE_REQUEST' struct.
export const API_BATCH_QUERY_VAULT_PERFORMANCE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_i_ds: 'vi',
    use_annualized_returns: 'ua'
  },
  LITE_TO_FULL: {
    vi: 'vault_i_ds',
    ua: 'use_annualized_returns'
  }
})
