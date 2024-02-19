import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'WS_CANDLESTICK_REQUEST' struct.
export const WS_CANDLESTICK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    interval: 'i',
    type: 't'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    i: 'interval',
    t: 'type'
  }
})
