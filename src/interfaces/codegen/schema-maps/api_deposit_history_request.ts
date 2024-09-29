import { type SchemaPairMap } from './types'

// Schema map for the 'API_DEPOSIT_HISTORY_REQUEST' struct.
export const API_DEPOSIT_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    token_currency: 'tc',
    start_time: 'st',
    end_time: 'et',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    tc: 'token_currency',
    st: 'start_time',
    et: 'end_time',
    l: 'limit',
    c: 'cursor'
  }
})
