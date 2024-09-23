import { INSTRUMENT_MAP } from './instrument'
import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ALL_INSTRUMENTS_RESPONSE' struct.
export const API_GET_ALL_INSTRUMENTS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [INSTRUMENT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [INSTRUMENT_MAP.LITE_TO_FULL]]
  }
})
