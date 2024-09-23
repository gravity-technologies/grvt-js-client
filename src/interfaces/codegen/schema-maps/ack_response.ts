import { type SchemaPairMap } from './types'

// Schema map for the 'ACK_RESPONSE' struct.
export const ACK_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    acknowledgement: 'a'
  },
  LITE_TO_FULL: {
    a: 'acknowledgement'
  }
})
