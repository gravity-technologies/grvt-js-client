import { type SchemaPairMap } from './types'

// Schema map for the 'API_PUBLIC_TRADES_REQUEST' struct.
export const API_PUBLIC_TRADES_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    limit: 'l'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    l: 'limit'
  }
})
