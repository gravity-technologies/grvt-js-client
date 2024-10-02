import { type SchemaPairMap } from './types'
import { TICKER_MAP } from './snap_ticker'

// Schema map for the 'API_TICKER_FEED_DATA_V_1' struct.
export const API_TICKER_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', TICKER_MAP.LITE_TO_FULL]
  }
})
