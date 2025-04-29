import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_PARAMS' struct.
export const VAULT_PARAMS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    management_fee_centi_beeps: 'mf',
    performance_fee_centi_beeps: 'pf',
    marketing_fee_centi_beeps: 'mf1',
    vault_type: 'vt',
    valuation_cap_usd_6_dec: 'vc',
    min_redemption_period_seconds: 'mr',
    max_redemption_period_seconds: 'mr1',
    auto_redemption_barrier_centi_beeps: 'ar',
    reward_sharing_ratio_centi_beeps: 'rs'
  },
  LITE_TO_FULL: {
    mf: 'management_fee_centi_beeps',
    pf: 'performance_fee_centi_beeps',
    mf1: 'marketing_fee_centi_beeps',
    vt: 'vault_type',
    vc: 'valuation_cap_usd_6_dec',
    mr: 'min_redemption_period_seconds',
    mr1: 'max_redemption_period_seconds',
    ar: 'auto_redemption_barrier_centi_beeps',
    rs: 'reward_sharing_ratio_centi_beeps'
  }
})
