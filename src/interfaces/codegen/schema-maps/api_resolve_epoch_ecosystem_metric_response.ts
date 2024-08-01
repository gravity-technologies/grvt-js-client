import { type SchemaPairMap } from './types'

// Schema map for the 'API_RESOLVE_EPOCH_ECOSYSTEM_METRIC_RESPONSE' struct.
export const API_RESOLVE_EPOCH_ECOSYSTEM_METRIC_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch_name: 'en',
    point: 'p',
    last_calculated_time: 'lc'
  },
  LITE_TO_FULL: {
    en: 'epoch_name',
    p: 'point',
    lc: 'last_calculated_time'
  }
})
