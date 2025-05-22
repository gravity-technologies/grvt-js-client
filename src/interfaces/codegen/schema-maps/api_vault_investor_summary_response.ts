import { type SchemaPairMap } from './types'
import { VAULT_INVESTOR_SUMMARY_MAP } from './vault_investor_summary'

// Schema map for the 'API_VAULT_INVESTOR_SUMMARY_RESPONSE' struct.
export const API_VAULT_INVESTOR_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_investor_summary: ['vi', [VAULT_INVESTOR_SUMMARY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    vi: ['vault_investor_summary', [VAULT_INVESTOR_SUMMARY_MAP.LITE_TO_FULL]]
  }
})
