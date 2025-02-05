import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_EPOCH_BADGE_POINT_DISTRIBUTION_REQUEST' struct.
export const QUERY_EPOCH_BADGE_POINT_DISTRIBUTION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    type: 't'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    t: 'type'
  }
})
