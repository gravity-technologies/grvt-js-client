import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_TRADER_STAT_RESPONSE' struct.
export const API_GET_TRADER_STAT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total_fee: 'tf'
  },
  LITE_TO_FULL: {
    tf: 'total_fee'
  }
})
