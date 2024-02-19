import { type SchemaPairMap } from './types'

// Schema map for the 'SETTLEMENT_PRICE' struct.
export const SETTLEMENT_PRICE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    settlement_time: 'st',
    settlement_price: 'sp'
  },
  LITE_TO_FULL: {
    st: 'settlement_time',
    sp: 'settlement_price'
  }
})
