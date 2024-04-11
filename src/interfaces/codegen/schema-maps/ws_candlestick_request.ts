import { type SchemaPairMap } from './types'

// Schema map for the 'WS_CANDLESTICK_REQUEST' struct.
export const WS_CANDLESTICK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    interval: 'i',
    type: 't'
  },
  LITE_TO_FULL: {
    a: 'asset',
    i: 'interval',
    t: 'type'
  }
})
