import { type SchemaPairMap } from './types'

// Schema map for the 'WS_POSITIONS_FEED_SELECTOR_V_1' struct.
export const WS_POSITIONS_FEED_SELECTOR_V_1_MAP: SchemaPairMap = Object.freeze({
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
