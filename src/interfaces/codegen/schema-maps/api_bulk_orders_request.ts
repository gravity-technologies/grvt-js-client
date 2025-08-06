import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'API_BULK_ORDERS_REQUEST' struct.
export const API_BULK_ORDERS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    orders: ['o', [ORDER_MAP.FULL_TO_LITE]],
    order_i_ds: 'oi',
    client_order_i_ds: 'co',
    time_to_live_ms: 'tt'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    o: ['orders', [ORDER_MAP.LITE_TO_FULL]],
    oi: 'order_i_ds',
    co: 'client_order_i_ds',
    tt: 'time_to_live_ms'
  }
})
