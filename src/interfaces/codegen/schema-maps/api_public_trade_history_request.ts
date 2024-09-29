import { type SchemaPairMap } from './types'

// Schema map for the 'API_PUBLIC_TRADE_HISTORY_REQUEST' struct.
export const API_PUBLIC_TRADE_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    start_time: 'st',
    end_time: 'et',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    st: 'start_time',
    et: 'end_time',
    l: 'limit',
    c: 'cursor'
  }
})
