import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_TRADING_PERFORMANCE_SUMMARY_REQUEST' struct.
export const API_QUERY_TRADING_PERFORMANCE_SUMMARY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    time_interval: 'ti',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    ti: 'time_interval',
    st: 'start_time',
    et: 'end_time'
  }
})
