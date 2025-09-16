import { type SchemaPairMap } from './types'

// Schema map for the 'API_CROSS_EXCH_VAULT_VIEW_INVESTMENT_QUEUE_REQUEST' struct.
export const API_CROSS_EXCH_VAULT_VIEW_INVESTMENT_QUEUE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    vault_id: 'vi'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    vi: 'vault_id'
  }
})
