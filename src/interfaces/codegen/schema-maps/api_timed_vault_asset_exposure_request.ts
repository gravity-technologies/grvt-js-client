import { type SchemaPairMap } from './types'

// Schema map for the 'API_TIMED_VAULT_ASSET_EXPOSURE_REQUEST' struct.
export const API_TIMED_VAULT_ASSET_EXPOSURE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    is_gross_exposure: 'ig',
    time_interval: 'ti'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    ig: 'is_gross_exposure',
    ti: 'time_interval'
  }
})
