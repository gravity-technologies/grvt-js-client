import { type SchemaPairMap } from './types'

// Schema map for the 'API_VAULT_SUMMARY' struct.
export const API_VAULT_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    start_interval: 'si',
    vault_id: 'vi',
    share_price: 'sp'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    si: 'start_interval',
    vi: 'vault_id',
    sp: 'share_price'
  }
})
