import { type SchemaPairMap } from './types'
import { PRIVATE_TRADE_MAP } from './flat_private_trade'

// Schema map for the 'WS_PRIVATE_TRADE_RESPONSE' struct.
export const WS_PRIVATE_TRADE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', PRIVATE_TRADE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', PRIVATE_TRADE_MAP.LITE_TO_FULL]
  }
})
