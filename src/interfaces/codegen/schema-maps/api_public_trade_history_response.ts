import { type SchemaPairMap } from './types'
import { PUBLIC_TRADE_MAP } from './flat_public_trade'

// Schema map for the 'API_PUBLIC_TRADE_HISTORY_RESPONSE' struct.
export const API_PUBLIC_TRADE_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [PUBLIC_TRADE_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['results', [PUBLIC_TRADE_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
