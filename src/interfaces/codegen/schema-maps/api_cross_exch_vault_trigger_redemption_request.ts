import { type SchemaPairMap } from './types'

// Schema map for the 'API_CROSS_EXCH_VAULT_TRIGGER_REDEMPTION_REQUEST' struct.
export const API_CROSS_EXCH_VAULT_TRIGGER_REDEMPTION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    vault_id: 'vi',
    request_time: 'rt'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    vi: 'vault_id',
    rt: 'request_time'
  }
})
