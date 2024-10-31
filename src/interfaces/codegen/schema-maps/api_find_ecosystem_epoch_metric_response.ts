import { type SchemaPairMap } from './types'
import { ECOSYSTEM_METRIC_MAP } from './ecosystem_metric'

// Schema map for the 'API_FIND_ECOSYSTEM_EPOCH_METRIC_RESPONSE' struct.
export const API_FIND_ECOSYSTEM_EPOCH_METRIC_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    metric: ['m', ECOSYSTEM_METRIC_MAP.FULL_TO_LITE],
    rank: 'r',
    total: 't',
    last_calculated_at: 'lc'
  },
  LITE_TO_FULL: {
    m: ['metric', ECOSYSTEM_METRIC_MAP.LITE_TO_FULL],
    r: 'rank',
    t: 'total',
    lc: 'last_calculated_at'
  }
})
