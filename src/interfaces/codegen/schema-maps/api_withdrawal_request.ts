import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'API_WITHDRAWAL_REQUEST' struct.
export const API_WITHDRAWAL_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    from_account_id: 'fa',
    to_eth_address: 'te',
    token_currency: 'tc',
    num_tokens: 'nt',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    fa: 'from_account_id',
    te: 'to_eth_address',
    tc: 'token_currency',
    nt: 'num_tokens',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL]
  }
})
