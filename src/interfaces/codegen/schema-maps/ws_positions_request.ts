import { type SchemaPairMap } from './types'

// Schema map for the 'WS_POSITIONS_REQUEST' struct.
export const WS_POSITIONS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote'
  }
})
