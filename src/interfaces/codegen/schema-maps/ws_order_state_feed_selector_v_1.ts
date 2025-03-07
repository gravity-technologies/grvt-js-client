import { type SchemaPairMap } from './types'

// Schema map for the 'WS_ORDER_STATE_FEED_SELECTOR_V_1' struct.
export const WS_ORDER_STATE_FEED_SELECTOR_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    instrument: 'i'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    i: 'instrument'
  }
})
