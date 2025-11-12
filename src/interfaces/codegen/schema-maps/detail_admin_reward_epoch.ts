import { type SchemaPairMap } from './types'
import { ADMIN_REWARD_EPOCH_MAP } from './admin_reward_epoch'
import { POINT_DISTRIBUTION_RATIO_MAP } from './point_distribution_ratio'

// Schema map for the 'DETAIL_ADMIN_REWARD_EPOCH' struct.
export const DETAIL_ADMIN_REWARD_EPOCH_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch_info: ['ei', ADMIN_REWARD_EPOCH_MAP.FULL_TO_LITE],
    distribution_percentage: ['dp', POINT_DISTRIBUTION_RATIO_MAP.FULL_TO_LITE],
    raw_distribution_percentage: ['rd', POINT_DISTRIBUTION_RATIO_MAP.FULL_TO_LITE],
    boost_percentage: ['bp', POINT_DISTRIBUTION_RATIO_MAP.FULL_TO_LITE],
    visibility_percentage: 'vp'
  },
  LITE_TO_FULL: {
    ei: ['epoch_info', ADMIN_REWARD_EPOCH_MAP.LITE_TO_FULL],
    dp: ['distribution_percentage', POINT_DISTRIBUTION_RATIO_MAP.LITE_TO_FULL],
    rd: ['raw_distribution_percentage', POINT_DISTRIBUTION_RATIO_MAP.LITE_TO_FULL],
    bp: ['boost_percentage', POINT_DISTRIBUTION_RATIO_MAP.LITE_TO_FULL],
    vp: 'visibility_percentage'
  }
})
