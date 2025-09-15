import { type SchemaPairMap } from './types'

// Schema map for the 'CROSS_EXCH_VAULT_PENDING_INVESTMENT' struct.
export const CROSS_EXCH_VAULT_PENDING_INVESTMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    request_time: 'rt',
    currency: 'c',
    num_tokens: 'nt',
    is_manager: 'im'
  },
  LITE_TO_FULL: {
    rt: 'request_time',
    c: 'currency',
    nt: 'num_tokens',
    im: 'is_manager'
  }
})
