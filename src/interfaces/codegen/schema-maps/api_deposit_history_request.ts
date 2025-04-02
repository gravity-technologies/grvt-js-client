import { type SchemaPairMap } from './types'

// Schema map for the 'API_DEPOSIT_HISTORY_REQUEST' struct.
export const API_DEPOSIT_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    currency: 'c',
    start_time: 'st',
    end_time: 'et',
    limit: 'l',
    cursor: 'c1',
    main_account_id: 'ma'
  },
  LITE_TO_FULL: {
    c: 'currency',
    st: 'start_time',
    et: 'end_time',
    l: 'limit',
    c1: 'cursor',
    ma: 'main_account_id'
  }
})
