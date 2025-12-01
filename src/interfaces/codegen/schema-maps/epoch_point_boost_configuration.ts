import { type SchemaPairMap } from './types'
import { POINT_DISTRIBUTION_PERCENTAGE_MAP } from './point_distribution_percentage'

// Schema map for the 'EPOCH_POINT_BOOST_CONFIGURATION' struct.
export const EPOCH_POINT_BOOST_CONFIGURATION_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    id: 'i',
    epoch: 'e',
    boost_percentage: ['bp', POINT_DISTRIBUTION_PERCENTAGE_MAP.FULL_TO_LITE],
    status: 's',
    created_by_id: 'cb',
    update_by_id: 'ub',
    create_time: 'ct',
    update_time: 'ut'
  },
  LITE_TO_FULL: {
    i: 'id',
    e: 'epoch',
    bp: ['boost_percentage', POINT_DISTRIBUTION_PERCENTAGE_MAP.LITE_TO_FULL],
    s: 'status',
    cb: 'created_by_id',
    ub: 'update_by_id',
    ct: 'create_time',
    ut: 'update_time'
  }
})
