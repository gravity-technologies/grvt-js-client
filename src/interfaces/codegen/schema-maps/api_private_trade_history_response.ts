import { type SchemaPairMap } from './types'
import { PRIVATE_TRADE_MAP } from './flat_private_trade'

// Schema map for the 'API_PRIVATE_TRADE_HISTORY_RESPONSE' struct.
export const API_PRIVATE_TRADE_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [PRIVATE_TRADE_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['results', [PRIVATE_TRADE_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
