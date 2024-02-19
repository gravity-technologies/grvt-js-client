import { type SchemaPairMap } from './types'

// Schema map for the 'API_TRANSFER_HISTORY_REQUEST' struct.
export const API_TRANSFER_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    limit: 'l',
    cursor: 'c',
    token_currency: 'tc',
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    l: 'limit',
    c: 'cursor',
    tc: 'token_currency',
    st: 'start_time',
    et: 'end_time'
  }
})
