import { type SchemaPairMap } from './types'

// Schema map for the 'API_PRE_DEPOSIT_CHECK_RESPONSE' struct.
export const API_PRE_DEPOSIT_CHECK_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    max_deposit_limit: 'md',
    currency: 'c'
  },
  LITE_TO_FULL: {
    md: 'max_deposit_limit',
    c: 'currency'
  }
})
