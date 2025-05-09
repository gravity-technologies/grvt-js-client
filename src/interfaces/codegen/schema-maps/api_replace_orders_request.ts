import { type SchemaPairMap } from './types'
import { ORDER_MAP } from './order'

// Schema map for the 'API_REPLACE_ORDERS_REQUEST' struct.
export const API_REPLACE_ORDERS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    client_order_i_ds: 'co',
    order_i_ds: 'oi',
    new_orders: ['no', [ORDER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    co: 'client_order_i_ds',
    oi: 'order_i_ds',
    no: ['new_orders', [ORDER_MAP.LITE_TO_FULL]]
  }
})
