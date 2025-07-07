import { type SchemaPairMap } from './types'

// Schema map for the 'ECN_TO_BROKER_FEED' struct.
export const ECN_TO_BROKER_FEED_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    order_id: 'oi',
    client_order_id: 'co',
    sub_account_id: 'sa',
    asset: 'a',
    seq_no: 'sn',
    cumulative_request_size: 'cr',
    cumulative_filled_size: 'cf',
    cumulative_shortfall: 'cs',
    status: 's',
    reject_reason: 'rr',
    expiry_time: 'et'
  },
  LITE_TO_FULL: {
    oi: 'order_id',
    co: 'client_order_id',
    sa: 'sub_account_id',
    a: 'asset',
    sn: 'seq_no',
    cr: 'cumulative_request_size',
    cf: 'cumulative_filled_size',
    cs: 'cumulative_shortfall',
    s: 'status',
    rr: 'reject_reason',
    et: 'expiry_time'
  }
})
