import { type SchemaPairMap } from './types'

// Schema map for the 'REWARD_EPOCH_INFO' struct.
export const REWARD_EPOCH_INFO_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    epoch_start_time: 'es',
    epoch_end_time: 'ee',
    status: 's'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    es: 'epoch_start_time',
    ee: 'epoch_end_time',
    s: 'status'
  }
})
