import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_LATEST_LP_SNAPSHOT_REQUEST' struct.
export const API_GET_LATEST_LP_SNAPSHOT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying'
  }
})
