import { type SchemaPairMap } from './types'
import { TICKER_MAP } from './snap_ticker'

// Schema map for the 'API_TICKER_RESPONSE_V_1' struct.
export const API_TICKER_RESPONSE_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['results', TICKER_MAP.LITE_TO_FULL]
  }
})
