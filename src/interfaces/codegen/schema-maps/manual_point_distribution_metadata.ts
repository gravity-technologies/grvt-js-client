import { type SchemaPairMap } from './types'

// Schema map for the 'MANUAL_POINT_DISTRIBUTION_METADATA' struct.
export const MANUAL_POINT_DISTRIBUTION_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    reason: 'r',
    raffle_task_id: 'rt',
    task_account_create_time: 'ta'
  },
  LITE_TO_FULL: {
    r: 'reason',
    rt: 'raffle_task_id',
    ta: 'task_account_create_time'
  }
})
