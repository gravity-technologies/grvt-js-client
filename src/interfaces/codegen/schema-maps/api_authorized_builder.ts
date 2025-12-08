import { type SchemaPairMap } from './types'

// Schema map for the 'API_AUTHORIZED_BUILDER' struct.
export const API_AUTHORIZED_BUILDER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    builder_account_id: 'ba',
    max_futures_fee_rate: 'mf',
    max_spot_fee_rate: 'ms'
  },
  LITE_TO_FULL: {
    ba: 'builder_account_id',
    mf: 'max_futures_fee_rate',
    ms: 'max_spot_fee_rate'
  }
})
