import { type SchemaPairMap } from './types'

// Schema map for the 'TRADER_METRIC' struct.
export const TRADER_METRIC_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total_fee: 'tf',
    total_point: 'tp'
  },
  LITE_TO_FULL: {
    tf: 'total_fee',
    tp: 'total_point'
  }
})
