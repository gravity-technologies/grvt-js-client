import { type SchemaPairMap } from './types'
import { VAULT_REDEMPTION_REQUEST_MAP } from './vault_redemption_req_view'

// Schema map for the 'PRE_MIN_REDEMPTIONS' struct.
export const PRE_MIN_REDEMPTIONS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    requests: ['r', [VAULT_REDEMPTION_REQUEST_MAP.FULL_TO_LITE]],
    token_count: 'tc'
  },
  LITE_TO_FULL: {
    r: ['requests', [VAULT_REDEMPTION_REQUEST_MAP.LITE_TO_FULL]],
    tc: 'token_count'
  }
})
