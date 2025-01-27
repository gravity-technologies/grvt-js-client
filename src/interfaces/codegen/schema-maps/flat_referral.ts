import { type SchemaPairMap } from './types'

// Schema map for the 'FLAT_REFERRAL' struct.
export const FLAT_REFERRAL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai',
    referrer_id: 'ri',
    referrer_level: 'rl',
    account_create_time: 'ac',
    main_account_id: 'ma',
    referrer_main_account_id: 'rm',
    is_business: 'ib',
    is_kyc_completed: 'ik',
    kyc_completed_at: 'kc',
    kyc_type: 'kt'
  },
  LITE_TO_FULL: {
    ai: 'account_id',
    ri: 'referrer_id',
    rl: 'referrer_level',
    ac: 'account_create_time',
    ma: 'main_account_id',
    rm: 'referrer_main_account_id',
    ib: 'is_business',
    ik: 'is_kyc_completed',
    kc: 'kyc_completed_at',
    kt: 'kyc_type'
  }
})
