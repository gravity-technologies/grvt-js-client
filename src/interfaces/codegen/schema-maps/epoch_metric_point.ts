import { type SchemaPairMap } from './types'
import { REWARD_METRIC_POINT_METADATA_MAP } from './reward_metric_point_metadata'

// Schema map for the 'EPOCH_METRIC_POINT' struct.
export const EPOCH_METRIC_POINT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    metric: 'm',
    epoch: 'e',
    off_chain_account_id: 'oc',
    raw_point: 'rp',
    adjusted_point: 'ap',
    point: 'p',
    metadata: ['m1', REWARD_METRIC_POINT_METADATA_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    m: 'metric',
    e: 'epoch',
    oc: 'off_chain_account_id',
    rp: 'raw_point',
    ap: 'adjusted_point',
    p: 'point',
    m1: ['metadata', REWARD_METRIC_POINT_METADATA_MAP.LITE_TO_FULL]
  }
})
