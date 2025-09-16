import { type SchemaPairMap } from './types'

// Schema map for the 'REWARD_EPOCH_BAND_PARAMETER' struct.
export const REWARD_EPOCH_BAND_PARAMETER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    id: 'i',
    effective_epoch_start: 'ee',
    effective_epoch_end: 'ee1',
    metric: 'm',
    band_range: 'br',
    band_steepness: 'bs',
    status: 's',
    created_by_id: 'cb',
    create_time: 'ct',
    update_time: 'ut'
  },
  LITE_TO_FULL: {
    i: 'id',
    ee: 'effective_epoch_start',
    ee1: 'effective_epoch_end',
    m: 'metric',
    br: 'band_range',
    bs: 'band_steepness',
    s: 'status',
    cb: 'created_by_id',
    ct: 'create_time',
    ut: 'update_time'
  }
})
