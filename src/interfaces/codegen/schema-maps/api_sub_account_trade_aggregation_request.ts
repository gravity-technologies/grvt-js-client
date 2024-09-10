import { type SchemaPairMap } from './types'

// Schema map for the 'API_SUB_ACCOUNT_TRADE_AGGREGATION_REQUEST' struct.
export const API_SUB_ACCOUNT_TRADE_AGGREGATION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    interval: 'i',
    sub_account_i_ds: 'sa',
    start_interval: 'si'
  },
  LITE_TO_FULL: {
    i: 'interval',
    sa: 'sub_account_i_ds',
    si: 'start_interval'
  }
})
