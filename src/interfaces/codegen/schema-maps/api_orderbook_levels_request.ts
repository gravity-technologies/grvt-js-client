import { type SchemaPairMap } from './types'

// Schema map for the 'API_ORDERBOOK_LEVELS_REQUEST' struct.
export const API_ORDERBOOK_LEVELS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    depth: 'd'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    d: 'depth'
  }
})
