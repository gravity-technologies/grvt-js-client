import { type SchemaPairMap } from './types'

// Schema map for the 'ACK' struct.
export const ACK_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    ack: 'a'
  },
  LITE_TO_FULL: {
    a: 'ack'
  }
})
