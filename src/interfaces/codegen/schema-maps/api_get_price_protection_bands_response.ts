import { type SchemaPairMap } from './types'
import { PRICE_PROTECTION_BAND_MAP } from './price_protection_band'
import { ASSET_SPECIFIC_PRICE_PROTECTION_BAND_MAP } from './asset_specific_price_protection_band'

// Schema map for the 'API_GET_PRICE_PROTECTION_BANDS_RESPONSE' struct.
export const API_GET_PRICE_PROTECTION_BANDS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    enabled: 'e',
    default_band: ['db', PRICE_PROTECTION_BAND_MAP.FULL_TO_LITE],
    asset_specific: ['as', [ASSET_SPECIFIC_PRICE_PROTECTION_BAND_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    e: 'enabled',
    db: ['default_band', PRICE_PROTECTION_BAND_MAP.LITE_TO_FULL],
    as: ['asset_specific', [ASSET_SPECIFIC_PRICE_PROTECTION_BAND_MAP.LITE_TO_FULL]]
  }
})
