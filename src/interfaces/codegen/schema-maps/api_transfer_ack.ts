import { type SchemaPairMap } from './types'

// Schema map for the 'API_TRANSFER_ACK' struct.
export const API_TRANSFER_ACK_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    ack: 'a',
    tx_id: 'ti'
  },
  LITE_TO_FULL: {
    a: 'ack',
    ti: 'tx_id'
  }
})
