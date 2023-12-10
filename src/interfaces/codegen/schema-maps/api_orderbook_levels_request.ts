import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'API_ORDERBOOK_LEVELS_REQUEST' struct.
export const API_ORDERBOOK_LEVELS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    depth: 'd',
    aggregate: 'a1'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    d: 'depth',
    a1: 'aggregate'
  }
})
