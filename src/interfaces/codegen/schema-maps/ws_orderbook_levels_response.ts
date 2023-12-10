import { type SchemaPairMap } from './types'
import { ORDERBOOK_LEVELS_MAP } from './snap_orderbook_levels'

// Schema map for the 'WS_ORDERBOOK_LEVELS_RESPONSE' struct.
export const WS_ORDERBOOK_LEVELS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', ORDERBOOK_LEVELS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', ORDERBOOK_LEVELS_MAP.LITE_TO_FULL]
  }
})
