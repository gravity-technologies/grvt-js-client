import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ORDER_REQUEST' struct.
export const API_GET_ORDER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    order_id: 'oi',
    client_order_id: 'co'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    oi: 'order_id',
    co: 'client_order_id'
  }
})
