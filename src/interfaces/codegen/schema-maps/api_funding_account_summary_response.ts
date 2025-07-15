import { type SchemaPairMap } from './types'
import { FUNDING_ACCOUNT_SUMMARY_MAP } from './funding_account_summary'
import { CLIENT_TIER_MAP } from './client_tier'

// Schema map for the 'API_FUNDING_ACCOUNT_SUMMARY_RESPONSE' struct.
export const API_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', FUNDING_ACCOUNT_SUMMARY_MAP.FULL_TO_LITE],
    tier: ['t', CLIENT_TIER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    r: ['result', FUNDING_ACCOUNT_SUMMARY_MAP.LITE_TO_FULL],
    t: ['tier', CLIENT_TIER_MAP.LITE_TO_FULL]
  }
})
