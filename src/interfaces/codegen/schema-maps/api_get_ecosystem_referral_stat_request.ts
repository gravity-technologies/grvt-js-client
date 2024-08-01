import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ECOSYSTEM_REFERRAL_STAT_REQUEST' struct.
export const API_GET_ECOSYSTEM_REFERRAL_STAT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    interval: 'i',
    start_interval: 'si'
  },
  LITE_TO_FULL: {
    i: 'interval',
    si: 'start_interval'
  }
})
