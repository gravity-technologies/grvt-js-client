import { type SchemaPairMap } from './types'

// Schema map for the 'API_ORDER_HISTORY_REQUEST' struct.
export const API_ORDER_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    l: 'limit',
    c: 'cursor'
  }
})
