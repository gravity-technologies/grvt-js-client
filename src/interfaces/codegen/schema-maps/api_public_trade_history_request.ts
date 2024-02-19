import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'API_PUBLIC_TRADE_HISTORY_REQUEST' struct.
export const API_PUBLIC_TRADE_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
    l: 'limit',
    c: 'cursor'
  }
})
