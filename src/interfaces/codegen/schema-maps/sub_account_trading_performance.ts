import { type SchemaPairMap } from './types'

// Schema map for the 'SUB_ACCOUNT_TRADING_PERFORMANCE' struct.
export const SUB_ACCOUNT_TRADING_PERFORMANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    sub_account_id: 'sa',
    total_trade_volume: 'tt',
    total_fee: 'tf',
    positive_fee: 'pf',
    num_traded: 'nt',
    realized_pnl: 'rp',
    unrealized_pnl: 'up',
    is_unrealized_pnl_snapshotted: 'iu',
    funding_payment_amount: 'fp'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    sa: 'sub_account_id',
    tt: 'total_trade_volume',
    tf: 'total_fee',
    pf: 'positive_fee',
    nt: 'num_traded',
    rp: 'realized_pnl',
    up: 'unrealized_pnl',
    iu: 'is_unrealized_pnl_snapshotted',
    fp: 'funding_payment_amount'
  }
})
