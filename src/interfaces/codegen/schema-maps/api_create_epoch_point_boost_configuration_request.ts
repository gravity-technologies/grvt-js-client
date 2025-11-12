import { type SchemaPairMap } from './types'
import { POINT_DISTRIBUTION_RATIO_MAP } from './point_distribution_ratio'

// Schema map for the 'API_CREATE_EPOCH_POINT_BOOST_CONFIGURATION_REQUEST' struct.
export const API_CREATE_EPOCH_POINT_BOOST_CONFIGURATION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    boost_percentage: ['bp', POINT_DISTRIBUTION_RATIO_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    e: 'epoch',
    bp: ['boost_percentage', POINT_DISTRIBUTION_RATIO_MAP.LITE_TO_FULL]
  }
})
