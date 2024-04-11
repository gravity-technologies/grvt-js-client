import { type SchemaPairMap } from './types'

// Schema map for the 'API_PUBLIC_TRADES_REQUEST' struct.
export const API_PUBLIC_TRADES_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    limit: 'l'
  },
  LITE_TO_FULL: {
    a: 'asset',
    l: 'limit'
  }
})
