import { type SchemaPairMap } from './types'

// Schema map for the 'WS_ORDER_REQUEST' struct.
export const WS_ORDER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    create_only: 'co'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    co: 'create_only'
  }
})
