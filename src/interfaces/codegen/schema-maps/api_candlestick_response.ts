import { type SchemaPairMap } from './types'
import { CANDLESTICK_MAP } from './candlestick'

// Schema map for the 'API_CANDLESTICK_RESPONSE' struct.
export const API_CANDLESTICK_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [CANDLESTICK_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [CANDLESTICK_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
