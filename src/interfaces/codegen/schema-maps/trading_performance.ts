import { type SchemaPairMap } from './types'

// Schema map for the 'TRADING_PERFORMANCE' struct.
export const TRADING_PERFORMANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    total_fee: 'tf',
    total_trade_volume: 'tt',
    num_traded: 'nt',
    positive_fee: 'pf',
    realized_pnl: 'rp',
    unrealized_pnl: 'up',
    is_unrealized_pnl_snapshotted: 'iu',
    last_start_interval: 'ls',
    funding_payment_amount: 'fp'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    tf: 'total_fee',
    tt: 'total_trade_volume',
    nt: 'num_traded',
    pf: 'positive_fee',
    rp: 'realized_pnl',
    up: 'unrealized_pnl',
    iu: 'is_unrealized_pnl_snapshotted',
    ls: 'last_start_interval',
    fp: 'funding_payment_amount'
  }
})
