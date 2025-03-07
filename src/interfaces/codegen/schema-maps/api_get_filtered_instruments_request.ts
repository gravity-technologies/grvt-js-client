import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_FILTERED_INSTRUMENTS_REQUEST' struct.
export const API_GET_FILTERED_INSTRUMENTS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    base: 'b',
    quote: 'q',
    is_active: 'ia',
    limit: 'l'
  },
  LITE_TO_FULL: {
    k: 'kind',
    b: 'base',
    q: 'quote',
    ia: 'is_active',
    l: 'limit'
  }
})
