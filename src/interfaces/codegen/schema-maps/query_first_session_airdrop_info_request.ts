import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_FIRST_SESSION_AIRDROP_INFO_REQUEST' struct.
export const QUERY_FIRST_SESSION_AIRDROP_INFO_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    off_chain_account_id: 'oc'
  },
  LITE_TO_FULL: {
    oc: 'off_chain_account_id'
  }
})
