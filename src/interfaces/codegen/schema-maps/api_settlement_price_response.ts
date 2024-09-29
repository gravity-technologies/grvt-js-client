import { type SchemaPairMap } from './types'
import { API_SETTLEMENT_PRICE_MAP } from './api_settlement_price'

// Schema map for the 'API_SETTLEMENT_PRICE_RESPONSE' struct.
export const API_SETTLEMENT_PRICE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [API_SETTLEMENT_PRICE_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['results', [API_SETTLEMENT_PRICE_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
