import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'WITHDRAWAL' struct.
export const WITHDRAWAL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    from_account_id: 'fa',
    to_eth_address: 'te',
    currency: 'c',
    num_tokens: 'nt',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    fa: 'from_account_id',
    te: 'to_eth_address',
    c: 'currency',
    nt: 'num_tokens',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL]
  }
})
