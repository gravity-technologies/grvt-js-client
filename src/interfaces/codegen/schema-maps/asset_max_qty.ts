import { type SchemaPairMap } from './types'

// Schema map for the 'ASSET_MAX_QTY' struct.
export const ASSET_MAX_QTY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    max_buy_qty: 'mb',
    max_sell_qty: 'ms'
  },
  LITE_TO_FULL: {
    a: 'asset',
    mb: 'max_buy_qty',
    ms: 'max_sell_qty'
  }
})
