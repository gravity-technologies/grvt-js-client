import { type SchemaPairMap } from './types'

// Schema map for the 'ECOSYSTEM_METRIC' struct.
export const ECOSYSTEM_METRIC_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    direct_invite_count: 'di',
    indirect_invite_count: 'ii',
    direct_invite_trading_volume: 'di1',
    indirect_invite_trading_volume: 'ii1',
    total_point: 'tp'
  },
  LITE_TO_FULL: {
    di: 'direct_invite_count',
    ii: 'indirect_invite_count',
    di1: 'direct_invite_trading_volume',
    ii1: 'indirect_invite_trading_volume',
    tp: 'total_point'
  }
})
