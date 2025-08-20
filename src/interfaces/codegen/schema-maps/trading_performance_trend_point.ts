import { type SchemaPairMap } from './types'

// Schema map for the 'TRADING_PERFORMANCE_TREND_POINT' struct.
export const TRADING_PERFORMANCE_TREND_POINT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    total_fee: 'tf',
    total_trade_volume: 'tt',
    num_traded: 'nt',
    positive_fee: 'pf',
    realized_pnl: 'rp',
    unrealized_pnl: 'up',
    is_unrealized_pnl_snapshotted: 'iu',
    funding_payment_amount: 'fp'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    tf: 'total_fee',
    tt: 'total_trade_volume',
    nt: 'num_traded',
    pf: 'positive_fee',
    rp: 'realized_pnl',
    up: 'unrealized_pnl',
    iu: 'is_unrealized_pnl_snapshotted',
    fp: 'funding_payment_amount'
  }
})
