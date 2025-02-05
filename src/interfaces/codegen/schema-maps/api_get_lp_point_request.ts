import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_LP_POINT_REQUEST' struct.
export const API_GET_LP_POINT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    kind: 'k',
    base: 'b'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    k: 'kind',
    b: 'base'
  }
})
