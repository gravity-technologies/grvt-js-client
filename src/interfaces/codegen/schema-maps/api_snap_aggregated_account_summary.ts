import { type SchemaPairMap } from './types'

// Schema map for the 'API_SNAP_AGGREGATED_ACCOUNT_SUMMARY' struct.
export const API_SNAP_AGGREGATED_ACCOUNT_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    start_interval: 'si',
    total_equity: 'te'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    si: 'start_interval',
    te: 'total_equity'
  }
})
