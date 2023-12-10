import { type SchemaPairMap } from './types'
import { TICKER_MAP } from './snap_ticker'

// Schema map for the 'WS_TICKER_RESPONSE' struct.
export const WS_TICKER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', TICKER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', TICKER_MAP.LITE_TO_FULL]
  }
})
