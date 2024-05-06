import { type SchemaPairMap } from './types'

// Schema map for the 'FUNDING_RATE' struct.
export const FUNDING_RATE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    funding_rate: 'fr',
    funding_time: 'ft',
    mark_price: 'mp'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    fr: 'funding_rate',
    ft: 'funding_time',
    mp: 'mark_price'
  }
})
