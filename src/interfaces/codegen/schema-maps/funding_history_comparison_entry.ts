import { type SchemaPairMap } from './types'
import { EXCHANGE_FUNDING_RATE_MAP } from './exchange_funding_rate'

// Schema map for the 'FUNDING_HISTORY_COMPARISON_ENTRY' struct.
export const FUNDING_HISTORY_COMPARISON_ENTRY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    funding_time: 'ft',
    mark_price: 'mp',
    funding_rates: ['fr', [EXCHANGE_FUNDING_RATE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    ft: 'funding_time',
    mp: 'mark_price',
    fr: ['funding_rates', [EXCHANGE_FUNDING_RATE_MAP.LITE_TO_FULL]]
  }
})
