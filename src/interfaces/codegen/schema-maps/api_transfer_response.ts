import { type SchemaPairMap } from './types'
import { API_TRANSFER_ACK_MAP } from './api_transfer_ack'

// Schema map for the 'API_TRANSFER_RESPONSE' struct.
export const API_TRANSFER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', API_TRANSFER_ACK_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', API_TRANSFER_ACK_MAP.LITE_TO_FULL]
  }
})
