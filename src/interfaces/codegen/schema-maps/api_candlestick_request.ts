import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'API_CANDLESTICK_REQUEST' struct.
export const API_CANDLESTICK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    interval: 'i',
    type: 't',
    start_time: 'st',
    end_time: 'et',
    limit: 'l'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    i: 'interval',
    t: 'type',
    st: 'start_time',
    et: 'end_time',
    l: 'limit'
  }
})
