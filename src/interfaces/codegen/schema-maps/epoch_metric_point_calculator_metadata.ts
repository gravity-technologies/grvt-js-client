import { type SchemaPairMap } from './types'

// Schema map for the 'EPOCH_METRIC_POINT_CALCULATOR_METADATA' struct.
export const EPOCH_METRIC_POINT_CALCULATOR_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    metric: 'm',
    epoch: 'e',
    allocated_point: 'ap',
    total_adjusted_point: 'ta',
    band_range: 'br',
    band_steepness: 'bs',
    calculated_at: 'ca'
  },
  LITE_TO_FULL: {
    m: 'metric',
    e: 'epoch',
    ap: 'allocated_point',
    ta: 'total_adjusted_point',
    br: 'band_range',
    bs: 'band_steepness',
    ca: 'calculated_at'
  }
})
