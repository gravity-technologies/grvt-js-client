import { type SchemaPairMap } from './types'

// Schema map for the 'API_TIMED_ASSET_EXPOSURE_REQUEST' struct.
export const API_TIMED_ASSET_EXPOSURE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    is_gross_exposure: 'ig',
    time_interval: 'ti',
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    ig: 'is_gross_exposure',
    ti: 'time_interval',
    sa: 'sub_account_id'
  }
})
