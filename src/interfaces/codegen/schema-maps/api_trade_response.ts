import { type SchemaPairMap } from './types'
import { TRADE_MAP } from './flat_public_trade'

// Schema map for the 'API_TRADE_RESPONSE' struct.
export const API_TRADE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [TRADE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [TRADE_MAP.LITE_TO_FULL]]
  }
})
