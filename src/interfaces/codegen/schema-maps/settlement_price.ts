import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'SETTLEMENT_PRICE' struct.
export const SETTLEMENT_PRICE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    settlement_time: 'st',
    settlement_price: 'sp'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    st: 'settlement_time',
    sp: 'settlement_price'
  }
})
