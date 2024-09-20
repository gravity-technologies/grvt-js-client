import { type SchemaPairMap } from './types'
import { INSTRUMENT_MAP } from './instrument'

// Schema map for the 'API_GET_ALL_INSTRUMENTS_RESPONSE' struct.
export const API_GET_ALL_INSTRUMENTS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instruments: ['i', [INSTRUMENT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    i: ['instruments', [INSTRUMENT_MAP.LITE_TO_FULL]]
  }
})
