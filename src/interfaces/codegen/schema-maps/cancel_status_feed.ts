import { type SchemaPairMap } from './types'

// Schema map for the 'CANCEL_STATUS_FEED' struct.
export const CANCEL_STATUS_FEED_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    client_order_id: 'co',
    order_id: 'oi',
    reason: 'r',
    update_time: 'ut',
    cancel_status: 'cs'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    co: 'client_order_id',
    oi: 'order_id',
    r: 'reason',
    ut: 'update_time',
    cs: 'cancel_status'
  }
})
