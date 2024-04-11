import { type SchemaPairMap } from './types'
import { ORDERBOOK_LEVEL_MAP } from './orderbook_level'

// Schema map for the 'ORDERBOOK_LEVELS' struct.
export const ORDERBOOK_LEVELS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    asset: 'a',
    bids: ['b', [ORDERBOOK_LEVEL_MAP.FULL_TO_LITE]],
    asks: ['a1', [ORDERBOOK_LEVEL_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    et: 'event_time',
    a: 'asset',
    b: ['bids', [ORDERBOOK_LEVEL_MAP.LITE_TO_FULL]],
    a1: ['asks', [ORDERBOOK_LEVEL_MAP.LITE_TO_FULL]]
  }
})
