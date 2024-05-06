import { type SchemaPairMap } from './types'

// Schema map for the 'API_FUNDING_RATE_REQUEST' struct.
export const API_FUNDING_RATE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    start_time: 'st',
    end_time: 'et',
    limit: 'l'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    st: 'start_time',
    et: 'end_time',
    l: 'limit'
  }
})
