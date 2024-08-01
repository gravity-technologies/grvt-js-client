import { type SchemaPairMap } from './types'

// Schema map for the 'API_SUB_ACCOUNT_TRADE_REQUEST' struct.
export const API_SUB_ACCOUNT_TRADE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    interval: 'i1',
    sub_account_i_ds: 'sa',
    start_interval: 'si',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    i1: 'interval',
    sa: 'sub_account_i_ds',
    si: 'start_interval',
    st: 'start_time',
    et: 'end_time'
  }
})
