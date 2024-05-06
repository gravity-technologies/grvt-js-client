import { type SchemaPairMap } from './types'

// Schema map for the 'WS_CANDLESTICK_FEED_SELECTOR_V_1' struct.
export const WS_CANDLESTICK_FEED_SELECTOR_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    interval: 'i1',
    type: 't'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    i1: 'interval',
    t: 'type'
  }
})
