import { type SchemaPairMap } from './types'

// Schema map for the 'WS_TRANSFER_FEED_SELECTOR_V_1' struct.
export const WS_TRANSFER_FEED_SELECTOR_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    sa: 'sub_account_id'
  }
})
