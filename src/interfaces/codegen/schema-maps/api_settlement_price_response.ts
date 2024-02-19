import { type SchemaPairMap } from './types'
import { SETTLEMENT_PRICE_MAP } from './settlement_price'

// Schema map for the 'API_SETTLEMENT_PRICE_RESPONSE' struct.
export const API_SETTLEMENT_PRICE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [SETTLEMENT_PRICE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [SETTLEMENT_PRICE_MAP.LITE_TO_FULL]]
  }
})
