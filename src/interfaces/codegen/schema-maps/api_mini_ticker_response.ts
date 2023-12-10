import { type SchemaPairMap } from './types'
import { MINI_TICKER_MAP } from './mini_ticker'

// Schema map for the 'API_MINI_TICKER_RESPONSE' struct.
export const API_MINI_TICKER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', MINI_TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['results', MINI_TICKER_MAP.LITE_TO_FULL]
  }
})
