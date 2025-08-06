import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_VAULT_INVESTOR_HISTORY_REQUEST' struct.
export const QUERY_VAULT_INVESTOR_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    vault_id: 'vi',
    types: 't',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    vi: 'vault_id',
    t: 'types',
    st: 'start_time',
    et: 'end_time'
  }
})
