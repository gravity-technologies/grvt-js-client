import { type SchemaPairMap } from './types'
import { FUNDING_PAYMENT_MAP } from './msg_funding_payment'

// Schema map for the 'API_FUNDING_PAYMENT_HISTORY_RESPONSE' struct.
export const API_FUNDING_PAYMENT_HISTORY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [FUNDING_PAYMENT_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [FUNDING_PAYMENT_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
