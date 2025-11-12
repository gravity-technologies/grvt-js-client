import { type SchemaPairMap } from './types'

// Schema map for the 'API_FUNDING_RATE' struct.
export const API_FUNDING_RATE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    funding_rate: 'fr',
    funding_time: 'ft',
    mark_price: 'mp',
    funding_rate_8_h_avg: 'fr1',
    funding_interval_hours: 'fi'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    fr: 'funding_rate',
    ft: 'funding_time',
    mp: 'mark_price',
    fr1: 'funding_rate_8_h_avg',
    fi: 'funding_interval_hours'
  }
})
