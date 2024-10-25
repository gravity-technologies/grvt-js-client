import { type SchemaPairMap } from './types'

// Schema map for the 'DEPOSIT_HISTORY' struct.
export const DEPOSIT_HISTORY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    l_1_hash: 'l1',
    l_2_hash: 'l2',
    to_account_id: 'ta',
    currency: 'c',
    num_tokens: 'nt',
    initiated_time: 'it',
    confirmed_time: 'ct',
    from_address: 'fa'
  },
  LITE_TO_FULL: {
    l1: 'l_1_hash',
    l2: 'l_2_hash',
    ta: 'to_account_id',
    c: 'currency',
    nt: 'num_tokens',
    it: 'initiated_time',
    ct: 'confirmed_time',
    fa: 'from_address'
  }
})
