import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_MAIN_ACCOUNT_LEADERBOARD_REQUEST' struct.
export const QUERY_MAIN_ACCOUNT_LEADERBOARD_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    limit: 'l',
    start_time: 'st',
    end_time: 'et',
    order_by: 'ob',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    l: 'limit',
    st: 'start_time',
    et: 'end_time',
    ob: 'order_by',
    c: 'cursor'
  }
})
