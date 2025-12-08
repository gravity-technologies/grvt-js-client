import { type SchemaPairMap } from './types'

// Schema map for the 'API_BUILDER_FILL_HISTORY_REQUEST' struct.
export const API_BUILDER_FILL_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    builder_main_account_id: 'bm',
    start_time: 'st',
    end_time: 'et',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    bm: 'builder_main_account_id',
    st: 'start_time',
    et: 'end_time',
    l: 'limit',
    c: 'cursor'
  }
})
