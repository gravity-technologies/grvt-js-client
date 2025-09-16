import { type SchemaPairMap } from './types'

// Schema map for the 'API_FIND_EPOCH_BAND_PARAMETER_FILTER' struct.
export const API_FIND_EPOCH_BAND_PARAMETER_FILTER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    status: 's',
    epoch: 'e',
    metric: 'm'
  },
  LITE_TO_FULL: {
    s: 'status',
    e: 'epoch',
    m: 'metric'
  }
})
