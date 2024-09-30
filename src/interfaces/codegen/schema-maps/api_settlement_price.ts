import { type SchemaPairMap } from './types'

// Schema map for the 'API_SETTLEMENT_PRICE' struct.
export const API_SETTLEMENT_PRICE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    base: 'b',
    quote: 'q',
    settlement_time: 'st',
    settlement_price: 'sp'
  },
  LITE_TO_FULL: {
    b: 'base',
    q: 'quote',
    st: 'settlement_time',
    sp: 'settlement_price'
  }
})
