import { type SchemaPairMap } from './types'

// Schema map for the 'API_ORDERBOOK_LEVELS_REQUEST' struct.
export const API_ORDERBOOK_LEVELS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    depth: 'd',
    aggregate: 'a1'
  },
  LITE_TO_FULL: {
    a: 'asset',
    d: 'depth',
    a1: 'aggregate'
  }
})
