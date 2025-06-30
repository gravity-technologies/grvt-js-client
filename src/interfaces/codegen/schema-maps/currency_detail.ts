import { type SchemaPairMap } from './types'

// Schema map for the 'CURRENCY_DETAIL' struct.
export const CURRENCY_DETAIL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    id: 'i',
    symbol: 's',
    balance_decimals: 'bd',
    quantity_multiplier: 'qm'
  },
  LITE_TO_FULL: {
    i: 'id',
    s: 'symbol',
    bd: 'balance_decimals',
    qm: 'quantity_multiplier'
  }
})
