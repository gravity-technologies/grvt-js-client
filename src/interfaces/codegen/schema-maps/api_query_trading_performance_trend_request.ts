import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_TRADING_PERFORMANCE_TREND_REQUEST' struct.
export const API_QUERY_TRADING_PERFORMANCE_TREND_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    time_interval: 'ti'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    ti: 'time_interval'
  }
})
