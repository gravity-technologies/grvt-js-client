import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_INSTRUMENT_REQUEST' struct.
export const API_GET_INSTRUMENT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    instrument_name: 'in'
  },
  LITE_TO_FULL: {
    a: 'asset',
    in: 'instrument_name'
  }
})
