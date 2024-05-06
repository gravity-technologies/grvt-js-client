import { type SchemaPairMap } from './types'

// Schema map for the 'WS_MINI_TICKER_FEED_SELECTOR_V_1' struct.
export const WS_MINI_TICKER_FEED_SELECTOR_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    rate: 'r'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    r: 'rate'
  }
})
