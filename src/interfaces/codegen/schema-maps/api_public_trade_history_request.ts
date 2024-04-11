import { type SchemaPairMap } from './types'

// Schema map for the 'API_PUBLIC_TRADE_HISTORY_REQUEST' struct.
export const API_PUBLIC_TRADE_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    a: 'asset',
    l: 'limit',
    c: 'cursor'
  }
})
