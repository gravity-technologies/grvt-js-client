import { type SchemaPairMap } from './types'

// Schema map for the 'ASSET_EXPOSURE_SUMMARY' struct.
export const ASSET_EXPOSURE_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instruments: 'i',
    notional: 'n'
  },
  LITE_TO_FULL: {
    i: 'instruments',
    n: 'notional'
  }
})
