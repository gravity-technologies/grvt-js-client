import { type SchemaPairMap } from './types'
import { MAIN_ACCOUNT_LEADERBOARD_ENTRY_MAP } from './main_account_leaderboard_entry'

// Schema map for the 'QUERY_MAIN_ACCOUNT_LEADERBOARD_RESPONSE' struct.
export const QUERY_MAIN_ACCOUNT_LEADERBOARD_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [MAIN_ACCOUNT_LEADERBOARD_ENTRY_MAP.FULL_TO_LITE]],
    cursor: 'c'
  },
  LITE_TO_FULL: {
    r: ['result', [MAIN_ACCOUNT_LEADERBOARD_ENTRY_MAP.LITE_TO_FULL]],
    c: 'cursor'
  }
})
