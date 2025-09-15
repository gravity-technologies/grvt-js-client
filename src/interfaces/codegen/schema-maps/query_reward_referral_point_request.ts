import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_REWARD_REFERRAL_POINT_REQUEST' struct.
export const QUERY_REWARD_REFERRAL_POINT_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    l: 'limit',
    c: 'cursor'
  }
})
