import { type SchemaPairMap } from './types'
import { MINI_TICKER_MAP } from './mini_ticker'

// Schema map for the 'WS_MINI_TICKER_RESPONSE' struct.
export const WS_MINI_TICKER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', MINI_TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', MINI_TICKER_MAP.LITE_TO_FULL]
  }
})
