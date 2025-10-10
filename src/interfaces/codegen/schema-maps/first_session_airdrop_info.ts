import { type SchemaPairMap } from './types'

// Schema map for the 'FIRST_SESSION_AIRDROP_INFO' struct.
export const FIRST_SESSION_AIRDROP_INFO_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    off_chain_account_id: 'oc',
    airdrop_ratio: 'ar',
    total_ecosystem_point: 'te',
    total_trader_point: 'tt',
    total_lp_point: 'tl'
  },
  LITE_TO_FULL: {
    oc: 'off_chain_account_id',
    ar: 'airdrop_ratio',
    te: 'total_ecosystem_point',
    tt: 'total_trader_point',
    tl: 'total_lp_point'
  }
})
