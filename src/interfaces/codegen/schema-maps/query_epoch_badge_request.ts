import { type SchemaPairMap } from './types'

// Schema map for the 'QUERY_EPOCH_BADGE_REQUEST' struct.
export const QUERY_EPOCH_BADGE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai',
    epoch: 'e',
    type: 't',
    limit: 'l',
    cursor: 'c'
  },
  LITE_TO_FULL: {
    ai: 'account_id',
    e: 'epoch',
    t: 'type',
    l: 'limit',
    c: 'cursor'
  }
})
