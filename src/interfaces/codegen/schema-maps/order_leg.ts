import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'ORDER_LEG' struct.
export const ORDER_LEG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    size: 's',
    limit_price: 'lp',
    oco_limit_price: 'ol',
    is_buying_asset: 'ib'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    s: 'size',
    lp: 'limit_price',
    ol: 'oco_limit_price',
    ib: 'is_buying_asset'
  }
})
