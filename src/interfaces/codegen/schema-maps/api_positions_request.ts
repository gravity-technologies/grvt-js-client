import { type SchemaPairMap } from './types'

// Schema map for the 'API_POSITIONS_REQUEST' struct.
export const API_POSITIONS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    base: 'b',
    quote: 'q'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    b: 'base',
    q: 'quote'
  }
})
