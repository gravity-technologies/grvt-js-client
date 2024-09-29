import { type SchemaPairMap } from './types'
import { PUBLIC_TRADE_MAP } from './flat_public_trade'

// Schema map for the 'WS_PUBLIC_TRADES_FEED_DATA_V_1' struct.
export const WS_PUBLIC_TRADES_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    selector: 's1',
    sequence_number: 'sn',
    feed: ['f', PUBLIC_TRADE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'selector',
    sn: 'sequence_number',
    f: ['feed', PUBLIC_TRADE_MAP.LITE_TO_FULL]
  }
})
