import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'API_GET_INSTRUMENT_REQUEST' struct.
export const API_GET_INSTRUMENT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    instrument_name: 'in'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    in: 'instrument_name'
  }
})
