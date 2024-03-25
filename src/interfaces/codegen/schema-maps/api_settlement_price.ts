import { type SchemaPairMap } from './types'

// Schema map for the 'API_SETTLEMENT_PRICE' struct.
export const API_SETTLEMENT_PRICE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    underlying: 'u',
    quote: 'q',
    settlement_time: 'st',
    settlement_price: 'sp'
  },
  LITE_TO_FULL: {
    u: 'underlying',
    q: 'quote',
    st: 'settlement_time',
    sp: 'settlement_price'
  }
})
