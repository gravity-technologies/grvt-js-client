import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ECOSYSTEM_REFERRAL_STAT_RESPONSE' struct.
export const API_GET_ECOSYSTEM_REFERRAL_STAT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    direct_invite_count: 'di',
    indirect_invite_count: 'ii',
    direct_invite_trading_volume: 'di1',
    indirect_invite_trading_volume: 'ii1'
  },
  LITE_TO_FULL: {
    di: 'direct_invite_count',
    ii: 'indirect_invite_count',
    di1: 'direct_invite_trading_volume',
    ii1: 'indirect_invite_trading_volume'
  }
})
