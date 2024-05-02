import { type SchemaPairMap } from './types'

// Schema map for the 'WS_ORDERBOOK_LEVELS_REQUEST_V_1' struct.
export const WS_ORDERBOOK_LEVELS_REQUEST_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    rate: 'r',
    depth: 'd',
    aggregate: 'a1'
  },
  LITE_TO_FULL: {
    a: 'asset',
    r: 'rate',
    d: 'depth',
    a1: 'aggregate'
  }
})
