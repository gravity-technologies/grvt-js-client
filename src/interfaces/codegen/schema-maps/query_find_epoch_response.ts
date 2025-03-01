import { type SchemaPairMap } from './types'
import { EPOCH_MAP } from './epoch'

// Schema map for the 'QUERY_FIND_EPOCH_RESPONSE' struct.
export const QUERY_FIND_EPOCH_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: ['e', EPOCH_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    e: ['epoch', EPOCH_MAP.LITE_TO_FULL]
  }
})
