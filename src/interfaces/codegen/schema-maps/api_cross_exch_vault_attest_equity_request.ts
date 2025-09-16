import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'API_CROSS_EXCH_VAULT_ATTEST_EQUITY_REQUEST' struct.
export const API_CROSS_EXCH_VAULT_ATTEST_EQUITY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    total_equity: 'te',
    num_lp_tokens: 'nl',
    share_price: 'sp',
    last_update_timestamp: 'lu',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    te: 'total_equity',
    nl: 'num_lp_tokens',
    sp: 'share_price',
    lu: 'last_update_timestamp',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL]
  }
})
