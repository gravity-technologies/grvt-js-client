import { type SchemaPairMap } from './types'

// Schema map for the 'ECOSYSTEM_POINT' struct.
export const ECOSYSTEM_POINT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai',
    main_account_id: 'ma',
    total_point: 'tp',
    direct_invite_count: 'di',
    indirect_invite_count: 'ii',
    direct_invite_trading_volume: 'di1',
    indirect_invite_trading_volume: 'ii1',
    calculate_at: 'ca',
    calculate_from: 'cf',
    calculate_to: 'ct',
    rank: 'r'
  },
  LITE_TO_FULL: {
    ai: 'account_id',
    ma: 'main_account_id',
    tp: 'total_point',
    di: 'direct_invite_count',
    ii: 'indirect_invite_count',
    di1: 'direct_invite_trading_volume',
    ii1: 'indirect_invite_trading_volume',
    ca: 'calculate_at',
    cf: 'calculate_from',
    ct: 'calculate_to',
    r: 'rank'
  }
})
