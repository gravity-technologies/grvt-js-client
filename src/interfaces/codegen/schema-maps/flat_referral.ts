import { type SchemaPairMap } from './types'

// Schema map for the 'FLAT_REFERRAL' struct.
export const FLAT_REFERRAL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai',
    referrer_id: 'ri',
    referrer_level: 'rl',
    account_create_time: 'ac'
  },
  LITE_TO_FULL: {
    ai: 'account_id',
    ri: 'referrer_id',
    rl: 'referrer_level',
    ac: 'account_create_time'
  }
})
