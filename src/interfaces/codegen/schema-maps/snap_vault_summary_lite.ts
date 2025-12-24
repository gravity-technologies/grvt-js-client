import { type SchemaPairMap } from './types'

// Schema map for the 'LITE_SNAP_VAULT_SUMMARY' struct.
export const LITE_SNAP_VAULT_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    vault_id: 'vi',
    share_price: 'sp'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    vi: 'vault_id',
    sp: 'share_price'
  }
})
