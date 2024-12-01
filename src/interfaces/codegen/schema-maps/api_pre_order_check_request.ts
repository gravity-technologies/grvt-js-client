import { ORDER_MAP } from './order'
import { type SchemaPairMap } from './types'

// Schema map for the 'API_PRE_ORDER_CHECK_REQUEST' struct.
export const API_PRE_ORDER_CHECK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    orders: ['o', [ORDER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    o: ['orders', [ORDER_MAP.LITE_TO_FULL]]
  }
})
