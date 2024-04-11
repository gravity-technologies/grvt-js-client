import { type SchemaPairMap } from './types'

// Schema map for the 'API_CANDLESTICK_REQUEST' struct.
export const API_CANDLESTICK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    interval: 'i',
    type: 't',
    start_time: 'st',
    end_time: 'et',
    limit: 'l'
  },
  LITE_TO_FULL: {
    a: 'asset',
    i: 'interval',
    t: 'type',
    st: 'start_time',
    et: 'end_time',
    l: 'limit'
  }
})
