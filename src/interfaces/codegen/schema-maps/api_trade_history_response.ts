import { type SchemaPairMap } from './types'
import { TRADE_MAP } from './flat_public_trade'

// Schema map for the 'API_TRADE_HISTORY_RESPONSE' struct.
export const API_TRADE_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [TRADE_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [TRADE_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
