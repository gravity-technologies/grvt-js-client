import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'API_VAULT_BURN_TOKENS_REQUEST' struct.
export const API_VAULT_BURN_TOKENS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    vault_id: 'vi',
    currency: 'c',
    num_tokens: 'nt',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    vi: 'vault_id',
    c: 'currency',
    nt: 'num_tokens',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL]
  }
})
