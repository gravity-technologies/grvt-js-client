import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_ACCOUNT_PERFORMANCE_TREND_REQUEST' struct.
export const API_QUERY_ACCOUNT_PERFORMANCE_TREND_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    time_interval: 'ti',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    ti: 'time_interval',
    st: 'start_time',
    et: 'end_time'
  }
})
