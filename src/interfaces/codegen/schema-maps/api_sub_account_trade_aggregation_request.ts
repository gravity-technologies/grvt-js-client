import { type SchemaPairMap } from './types'

// Schema map for the 'API_SUB_ACCOUNT_TRADE_AGGREGATION_REQUEST' struct.
export const API_SUB_ACCOUNT_TRADE_AGGREGATION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    limit: 'l',
    interval: 'i',
    sub_account_i_ds: 'sa',
    sub_account_id_greater_than: 'sa1',
    start_interval: 'si',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    l: 'limit',
    i: 'interval',
    sa: 'sub_account_i_ds',
    sa1: 'sub_account_id_greater_than',
    si: 'start_interval',
    st: 'start_time',
    et: 'end_time'
  }
})
