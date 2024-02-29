import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'FUNDING_RATE' struct.
export const FUNDING_RATE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    funding_rate: 'fr',
    funding_time: 'ft',
    mark_price: 'mp'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    fr: 'funding_rate',
    ft: 'funding_time',
    mp: 'mark_price'
  }
})
