import { type SchemaPairMap } from './types'
import { POINT_DISTRIBUTION_RATIO_MAP } from './point_distribution_ratio'

// Schema map for the 'API_CREATE_EPOCH_POINT_DISTRIBUTION_CONFIGURATION_REQUEST' struct.
export const API_CREATE_EPOCH_POINT_DISTRIBUTION_CONFIGURATION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_epoch: 'se',
    point_distribution_percentage: ['pd', POINT_DISTRIBUTION_RATIO_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    se: 'start_epoch',
    pd: ['point_distribution_percentage', POINT_DISTRIBUTION_RATIO_MAP.LITE_TO_FULL]
  }
})
