import { type SchemaPairMap } from './types'
import { TRADER_METRIC_MAP } from './trader_metric'

// Schema map for the 'API_FIND_TRADER_EPOCH_METRIC_RESPONSE' struct.
export const API_FIND_TRADER_EPOCH_METRIC_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    metric: ['m', TRADER_METRIC_MAP.FULL_TO_LITE],
    rank: 'r',
    total: 't',
    last_calculated_at: 'lc'
  },
  LITE_TO_FULL: {
    m: ['metric', TRADER_METRIC_MAP.LITE_TO_FULL],
    r: 'rank',
    t: 'total',
    lc: 'last_calculated_at'
  }
})
