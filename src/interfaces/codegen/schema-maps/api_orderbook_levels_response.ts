import { type SchemaPairMap } from './types'
import { ORDERBOOK_LEVELS_MAP } from './snap_orderbook_levels'

// Schema map for the 'API_ORDERBOOK_LEVELS_RESPONSE' struct.
export const API_ORDERBOOK_LEVELS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', ORDERBOOK_LEVELS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', ORDERBOOK_LEVELS_MAP.LITE_TO_FULL]
  }
})
