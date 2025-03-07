import { type SchemaPairMap } from './types'

// Schema map for the 'SPOT_BALANCE' struct.
export const SPOT_BALANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    currency: 'c',
    balance: 'b',
    index_price: 'ip'
  },
  LITE_TO_FULL: {
    c: 'currency',
    b: 'balance',
    ip: 'index_price'
  }
})
