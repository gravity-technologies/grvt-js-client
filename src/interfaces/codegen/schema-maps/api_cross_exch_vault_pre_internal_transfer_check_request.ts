import { type SchemaPairMap } from './types'

// Schema map for the 'API_CROSS_EXCH_VAULT_PRE_INTERNAL_TRANSFER_CHECK_REQUEST' struct.
export const API_CROSS_EXCH_VAULT_PRE_INTERNAL_TRANSFER_CHECK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    currency: 'c'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    c: 'currency'
  }
})
