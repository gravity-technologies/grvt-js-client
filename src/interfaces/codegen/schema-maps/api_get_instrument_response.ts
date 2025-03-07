import { type SchemaPairMap } from './types'
import { INSTRUMENT_MAP } from './instrument'

// Schema map for the 'API_GET_INSTRUMENT_RESPONSE' struct.
export const API_GET_INSTRUMENT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', INSTRUMENT_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', INSTRUMENT_MAP.LITE_TO_FULL]
  }
})
