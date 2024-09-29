import { type SchemaPairMap } from './types'

// Schema map for the 'API_CANDLESTICK_REQUEST' struct.
export const API_CANDLESTICK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    interval: 'i1',
    type: 't',
    start_time: 'st',
    end_time: 'et',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    i1: 'interval',
    t: 'type',
    st: 'start_time',
    et: 'end_time',
    l: 'limit',
    c: 'cursor'
  }
})
