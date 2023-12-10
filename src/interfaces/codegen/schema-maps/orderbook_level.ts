import { type SchemaPairMap } from './types'

// Schema map for the 'ORDERBOOK_LEVEL' struct.
export const ORDERBOOK_LEVEL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    price: 'p',
    size: 's',
    num_orders: 'no'
  },
  LITE_TO_FULL: {
    p: 'price',
    s: 'size',
    no: 'num_orders'
  }
})
