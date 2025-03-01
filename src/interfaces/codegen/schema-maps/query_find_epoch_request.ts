import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_FIND_EPOCH_REQUEST' struct.
export const QUERY_FIND_EPOCH_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    time: 't',
    epoch: 'e'
  },
  LITE_TO_FULL: {
    t: 'time',
    e: 'epoch'
  }
})
