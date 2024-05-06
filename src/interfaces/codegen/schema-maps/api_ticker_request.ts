import { type SchemaPairMap } from './types'

// Schema map for the 'API_TICKER_REQUEST' struct.
export const API_TICKER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i'
  },
  LITE_TO_FULL: {
    i: 'instrument'
  }
})
