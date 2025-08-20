import { type SchemaPairMap } from './types'
import { PRICE_PROTECTION_BAND_MAP } from './price_protection_band'

// Schema map for the 'ASSET_SPECIFIC_PRICE_PROTECTION_BAND' struct.
export const ASSET_SPECIFIC_PRICE_PROTECTION_BAND_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    band: ['b', PRICE_PROTECTION_BAND_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    a: 'asset',
    b: ['band', PRICE_PROTECTION_BAND_MAP.LITE_TO_FULL]
  }
})
