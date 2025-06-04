import { type SchemaPairMap } from './types'

// Schema map for the 'API_SUB_ACCOUNT_TRADE_AGGREGATION_REQUEST' struct.
export const API_SUB_ACCOUNT_TRADE_AGGREGATION_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    limit: 'l',
    interval: 'i',
    sub_account_i_ds: 'sa',
    start_interval: 'si',
    start_time: 'st',
    end_time: 'et',
    is_maker: 'im',
    is_taker: 'it',
    cursor: 'c',
    group_by_signer: 'gb',
    sources: 's'
  },
  LITE_TO_FULL: {
    l: 'limit',
    i: 'interval',
    sa: 'sub_account_i_ds',
    si: 'start_interval',
    st: 'start_time',
    et: 'end_time',
    im: 'is_maker',
    it: 'is_taker',
    c: 'cursor',
    gb: 'group_by_signer',
    s: 'sources'
  }
})
