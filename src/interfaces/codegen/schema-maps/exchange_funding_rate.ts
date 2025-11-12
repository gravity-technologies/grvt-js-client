import { type SchemaPairMap } from './types'

// Schema map for the 'EXCHANGE_FUNDING_RATE' struct.
export const EXCHANGE_FUNDING_RATE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    exchange: 'e',
    funding_rate: 'fr'
  },
  LITE_TO_FULL: {
    e: 'exchange',
    fr: 'funding_rate'
  }
})
