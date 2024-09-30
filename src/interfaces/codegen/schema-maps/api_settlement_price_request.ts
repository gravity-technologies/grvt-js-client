import { type SchemaPairMap } from './types'

// Schema map for the 'API_SETTLEMENT_PRICE_REQUEST' struct.
export const API_SETTLEMENT_PRICE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    base: 'b',
    quote: 'q',
    start_time: 'st',
    end_time: 'et',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    b: 'base',
    q: 'quote',
    st: 'start_time',
    et: 'end_time',
    l: 'limit',
    c: 'cursor'
  }
})
