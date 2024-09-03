import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'TRANSFER' struct.
export const TRANSFER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    from_account_id: 'fa',
    from_sub_account_id: 'fs',
    to_account_id: 'ta',
    to_sub_account_id: 'ts',
    token_currency: 'tc',
    num_tokens: 'nt',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    fa: 'from_account_id',
    fs: 'from_sub_account_id',
    ta: 'to_account_id',
    ts: 'to_sub_account_id',
    tc: 'token_currency',
    nt: 'num_tokens',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL]
  }
})
