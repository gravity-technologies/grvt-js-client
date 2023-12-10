import { type SchemaPairMap } from './types'
import { PUBLIC_TRADE_MAP } from './flat_public_trade'

// Schema map for the 'WS_RECENT_TRADE_RESPONSE' struct.
export const WS_RECENT_TRADE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', PUBLIC_TRADE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', PUBLIC_TRADE_MAP.LITE_TO_FULL]
  }
})
