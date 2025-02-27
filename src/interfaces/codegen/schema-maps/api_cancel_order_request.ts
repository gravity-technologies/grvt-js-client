import { type SchemaPairMap } from './types'

// Schema map for the 'API_CANCEL_ORDER_REQUEST' struct.
export const API_CANCEL_ORDER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    order_id: 'oi',
    client_order_id: 'co',
    time_to_live_ms: 'tt'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    oi: 'order_id',
    co: 'client_order_id',
    tt: 'time_to_live_ms'
  }
})
