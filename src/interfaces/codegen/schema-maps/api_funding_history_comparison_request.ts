import { type SchemaPairMap } from './types'

// Schema map for the 'API_FUNDING_HISTORY_COMPARISON_REQUEST' struct.
export const API_FUNDING_HISTORY_COMPARISON_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    agg_type: 'at',
    num_intervals: 'ni'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    at: 'agg_type',
    ni: 'num_intervals'
  }
})
