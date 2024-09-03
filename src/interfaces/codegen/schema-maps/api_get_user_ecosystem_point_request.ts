import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_USER_ECOSYSTEM_POINT_REQUEST' struct.
export const API_GET_USER_ECOSYSTEM_POINT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai',
    calculate_from: 'cf',
    include_user_rank: 'iu'
  },
  LITE_TO_FULL: {
    ai: 'account_id',
    cf: 'calculate_from',
    iu: 'include_user_rank'
  }
})
