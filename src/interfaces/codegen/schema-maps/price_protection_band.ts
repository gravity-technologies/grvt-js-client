import { type SchemaPairMap } from './types'

// Schema map for the 'PRICE_PROTECTION_BAND' struct.
export const PRICE_PROTECTION_BAND_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    high_centi_beeps: 'hc',
    low_centi_beeps: 'lc'
  },
  LITE_TO_FULL: {
    hc: 'high_centi_beeps',
    lc: 'low_centi_beeps'
  }
})
