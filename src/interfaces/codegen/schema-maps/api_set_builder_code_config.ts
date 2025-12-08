import { type SchemaPairMap } from './types'

// Schema map for the 'API_SET_BUILDER_CODE_CONFIG' struct.
export const API_SET_BUILDER_CODE_CONFIG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    enabled: 'e',
    max_futures_fee_rate: 'mf',
    max_spot_fee_rate: 'ms'
  },
  LITE_TO_FULL: {
    e: 'enabled',
    mf: 'max_futures_fee_rate',
    ms: 'max_spot_fee_rate'
  }
})
