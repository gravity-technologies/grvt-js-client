import { type SchemaPairMap } from './types'
import { EXCHANGE_FUNDING_RATE_MAP } from './exchange_funding_rate'

// Schema map for the 'LIVE_FUNDING_RATE_COMPARISON_ENTRY' struct.
export const LIVE_FUNDING_RATE_COMPARISON_ENTRY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    next_funding_time: 'nf',
    funding_interval_hours: 'fi',
    funding_rates: ['fr', [EXCHANGE_FUNDING_RATE_MAP.FULL_TO_LITE]],
    open_interest: 'oi'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    nf: 'next_funding_time',
    fi: 'funding_interval_hours',
    fr: ['funding_rates', [EXCHANGE_FUNDING_RATE_MAP.LITE_TO_FULL]],
    oi: 'open_interest'
  }
})
