import { type SchemaPairMap } from './types'
import { EPOCH_MAP } from './epoch'

// Schema map for the 'QUERY_GET_LIST_EPOCH_RESPONSE' struct.
export const QUERY_GET_LIST_EPOCH_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [EPOCH_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [EPOCH_MAP.LITE_TO_FULL]]
  }
})
