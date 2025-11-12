import { type SchemaPairMap } from './types'

// Schema map for the 'API_LIST_EPOCH_POINT_BOOST_CONFIGURATION_REQUEST' struct.
export const API_LIST_EPOCH_POINT_BOOST_CONFIGURATION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    status: 's'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    s: 'status'
  }
})
