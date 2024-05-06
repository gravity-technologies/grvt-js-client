import { type SchemaPairMap } from './types'

// Schema map for the 'ORDER_LEG' struct.
export const ORDER_LEG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    size: 's',
    limit_price: 'lp',
    oco_limit_price: 'ol',
    is_buying_asset: 'ib'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    s: 'size',
    lp: 'limit_price',
    ol: 'oco_limit_price',
    ib: 'is_buying_asset'
  }
})
