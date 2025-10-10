import { type SchemaPairMap } from './types'
import { FIRST_SESSION_AIRDROP_INFO_MAP } from './first_session_airdrop_info'

// Schema map for the 'QUERY_FIRST_SESSION_AIRDROP_INFO_RESPONSE' struct.
export const QUERY_FIRST_SESSION_AIRDROP_INFO_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    info: ['i', FIRST_SESSION_AIRDROP_INFO_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    i: ['info', FIRST_SESSION_AIRDROP_INFO_MAP.LITE_TO_FULL]
  }
})
