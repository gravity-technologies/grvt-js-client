import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ACTIVE_EPOCH_BAND_PARAMETER_VALUE_REQUEST' struct.
export const API_GET_ACTIVE_EPOCH_BAND_PARAMETER_VALUE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    metric: 'm'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    m: 'metric'
  }
})
