import { type SchemaPairMap } from './types'
import { FUNDING_RATE_MAP } from './funding_rate'

// Schema map for the 'API_FUNDING_RATE_RESPONSE' struct.
export const API_FUNDING_RATE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [FUNDING_RATE_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['results', [FUNDING_RATE_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
