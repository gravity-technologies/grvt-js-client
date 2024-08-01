import { type SchemaPairMap } from './types'

// Schema map for the 'MARK_PRICE' struct.
export const MARK_PRICE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    currency: 'c',
    mark_price: 'mp'
  },
  LITE_TO_FULL: {
    c: 'currency',
    mp: 'mark_price'
  }
})
