import { type SchemaPairMap } from './types'

// Schema map for the 'EPOCH' struct.
export const EPOCH_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    st: 'start_time',
    et: 'end_time'
  }
})
