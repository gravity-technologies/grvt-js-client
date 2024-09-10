import { type SchemaPairMap } from './types'
import { ECOSYSTEM_METRIC_MAP } from './ecosystem_metric'

// Schema map for the 'API_FIND_FIRST_EPOCH_METRIC_RESPONSE' struct.
export const API_FIND_FIRST_EPOCH_METRIC_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    phase_zero_metric: ['pz', ECOSYSTEM_METRIC_MAP.FULL_TO_LITE],
    phase_one_metric: ['po', ECOSYSTEM_METRIC_MAP.FULL_TO_LITE],
    rank: 'r',
    total: 't',
    total_point: 'tp',
    last_calculated_at: 'lc'
  },
  LITE_TO_FULL: {
    pz: ['phase_zero_metric', ECOSYSTEM_METRIC_MAP.LITE_TO_FULL],
    po: ['phase_one_metric', ECOSYSTEM_METRIC_MAP.LITE_TO_FULL],
    r: 'rank',
    t: 'total',
    tp: 'total_point',
    lc: 'last_calculated_at'
  }
})
