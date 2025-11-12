import { type SchemaPairMap } from './types'

// Schema map for the 'API_LIST_EPOCH_POINT_DISTRIBUTION_CONFIGURATION_REQUEST' struct.
export const API_LIST_EPOCH_POINT_DISTRIBUTION_CONFIGURATION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_epoch: 'se',
    status: 's'
  },
  LITE_TO_FULL: {
    se: 'start_epoch',
    s: 'status'
  }
})
