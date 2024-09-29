import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_LP_POINT_REQUEST' struct.
export const API_GET_LP_POINT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    kind: 'k',
    underlying: 'u'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    k: 'kind',
    u: 'underlying'
  }
})
