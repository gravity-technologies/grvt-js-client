import { type SchemaPairMap } from './types'
import { ACK_MAP } from './ack'

// Schema map for the 'ACK_RESPONSE' struct.
export const ACK_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', ACK_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', ACK_MAP.LITE_TO_FULL]
  }
})
