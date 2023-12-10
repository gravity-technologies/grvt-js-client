import { type SchemaPairMap } from './types'
import { POSITIONS_MAP } from './api_position'

// Schema map for the 'API_POSITIONS_RESPONSE' struct.
export const API_POSITIONS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [POSITIONS_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [POSITIONS_MAP.LITE_TO_FULL]]
  }
})
