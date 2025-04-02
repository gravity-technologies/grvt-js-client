import { type SchemaPairMap } from './types'

// Schema map for the 'API_DROP_CLIENT_WS_RESPONSE' struct.
export const API_DROP_CLIENT_WS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    num_dropped: 'nd'
  },
  LITE_TO_FULL: {
    nd: 'num_dropped'
  }
})
