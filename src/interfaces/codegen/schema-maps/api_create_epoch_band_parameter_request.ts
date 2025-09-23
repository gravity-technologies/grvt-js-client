import { type SchemaPairMap } from './types'

// Schema map for the 'API_CREATE_EPOCH_BAND_PARAMETER_REQUEST' struct.
export const API_CREATE_EPOCH_BAND_PARAMETER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    effective_epoch_start: 'ee',
    effective_epoch_end: 'ee1',
    metric: 'm',
    band_range: 'br',
    band_steepness: 'bs',
    is_highest_priority: 'ih'
  },
  LITE_TO_FULL: {
    ee: 'effective_epoch_start',
    ee1: 'effective_epoch_end',
    m: 'metric',
    br: 'band_range',
    bs: 'band_steepness',
    ih: 'is_highest_priority'
  }
})
