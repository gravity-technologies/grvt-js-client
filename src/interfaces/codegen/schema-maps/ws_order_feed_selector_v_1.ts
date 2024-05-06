import { type SchemaPairMap } from './types'

// Schema map for the 'WS_ORDER_FEED_SELECTOR_V_1' struct.
export const WS_ORDER_FEED_SELECTOR_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    state_filter: 'sf'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    sf: 'state_filter'
  }
})
