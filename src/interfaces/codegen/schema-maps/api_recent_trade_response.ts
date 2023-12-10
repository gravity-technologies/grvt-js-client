import { type SchemaPairMap } from './types'
import { PUBLIC_TRADE_MAP } from './flat_public_trade'

// Schema map for the 'API_RECENT_TRADE_RESPONSE' struct.
export const API_RECENT_TRADE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [PUBLIC_TRADE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [PUBLIC_TRADE_MAP.LITE_TO_FULL]]
  }
})
