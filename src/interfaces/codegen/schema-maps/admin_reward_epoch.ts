import { type SchemaPairMap } from './types'
import { ADMIN_REWARD_EPOCH_METADATA_MAP } from './admin_reward_epoch_metadata'

// Schema map for the 'ADMIN_REWARD_EPOCH' struct.
export const ADMIN_REWARD_EPOCH_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    id: 'i',
    epoch: 'e',
    start_time: 'st',
    end_time: 'et',
    emitted_points: 'ep',
    is_released: 'ir',
    metadata: ['m', ADMIN_REWARD_EPOCH_METADATA_MAP.FULL_TO_LITE],
    reserve_points: 'rp'
  },
  LITE_TO_FULL: {
    i: 'id',
    e: 'epoch',
    st: 'start_time',
    et: 'end_time',
    ep: 'emitted_points',
    ir: 'is_released',
    m: ['metadata', ADMIN_REWARD_EPOCH_METADATA_MAP.LITE_TO_FULL],
    rp: 'reserve_points'
  }
})
