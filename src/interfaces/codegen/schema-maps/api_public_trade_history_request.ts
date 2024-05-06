import { type SchemaPairMap } from './types'

// Schema map for the 'API_PUBLIC_TRADE_HISTORY_REQUEST' struct.
export const API_PUBLIC_TRADE_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    l: 'limit',
    c: 'cursor'
  }
})
