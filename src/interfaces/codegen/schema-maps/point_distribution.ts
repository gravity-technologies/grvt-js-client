import { type SchemaPairMap } from './types'
import { POINT_DISTRIBUTION_METADATA_MAP } from './point_distribution_metadata'

// Schema map for the 'POINT_DISTRIBUTION' struct.
export const POINT_DISTRIBUTION_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    id: 'i',
    off_chain_account_id: 'oc',
    points: 'p',
    epoch: 'e',
    metadata: ['m', POINT_DISTRIBUTION_METADATA_MAP.FULL_TO_LITE],
    distribution_type: 'dt',
    point_type: 'pt',
    created_by_id: 'cb',
    create_time: 'ct',
    update_time: 'ut'
  },
  LITE_TO_FULL: {
    i: 'id',
    oc: 'off_chain_account_id',
    p: 'points',
    e: 'epoch',
    m: ['metadata', POINT_DISTRIBUTION_METADATA_MAP.LITE_TO_FULL],
    dt: 'distribution_type',
    pt: 'point_type',
    cb: 'created_by_id',
    ct: 'create_time',
    ut: 'update_time'
  }
})
