import { type SchemaPairMap } from './types'
import { PRIVATE_TRADE_MAP } from './flat_private_trade'

// Schema map for the 'WS_PRIVATE_TRADE_RESPONSE_V_1' struct.
export const WS_PRIVATE_TRADE_RESPONSE_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', PRIVATE_TRADE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', PRIVATE_TRADE_MAP.LITE_TO_FULL]
  }
})
