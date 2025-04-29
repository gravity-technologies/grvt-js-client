import { type SchemaPairMap } from './types'

// Schema map for the 'SNAP_ACCOUNT_SUMMARY' struct.
export const SNAP_ACCOUNT_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    total_equity: 'te'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    te: 'total_equity'
  }
})
