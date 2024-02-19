import { type SchemaPairMap } from './types'
import { CANDLESTICK_MAP } from './candlestick'

// Schema map for the 'WS_CANDLESTICK_RESPONSE' struct.
export const WS_CANDLESTICK_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', CANDLESTICK_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', CANDLESTICK_MAP.LITE_TO_FULL]
  }
})
