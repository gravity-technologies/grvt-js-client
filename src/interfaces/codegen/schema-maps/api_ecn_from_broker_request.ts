import { type SchemaPairMap } from './types'

// Schema map for the 'API_ECN_FROM_BROKER_REQUEST' struct.
export const API_ECN_FROM_BROKER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    order_id: 'oi',
    client_order_id: 'co',
    asset: 'a',
    seq_no: 'sn',
    cumulative_confirmed_size: 'cc'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    oi: 'order_id',
    co: 'client_order_id',
    a: 'asset',
    sn: 'seq_no',
    cc: 'cumulative_confirmed_size'
  }
})
