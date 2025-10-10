import { type SchemaPairMap } from './types'

// Schema map for the 'FUNDING_INFO' struct.
export const FUNDING_INFO_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    interval_hours: 'ih',
    funding_rate_high_pct: 'fr',
    funding_rate_low_pct: 'fr1',
    update_time: 'ut'
  },
  LITE_TO_FULL: {
    ih: 'interval_hours',
    fr: 'funding_rate_high_pct',
    fr1: 'funding_rate_low_pct',
    ut: 'update_time'
  }
})
