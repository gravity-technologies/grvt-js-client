import { type SchemaPairMap } from './types'

// Schema map for the 'AGGREGATED_ACCOUNT_PERFORMANCE' struct.
export const AGGREGATED_ACCOUNT_PERFORMANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    main_account_id: 'ma',
    aggregated_pnl: 'ap',
    investment_pnl: 'ip',
    equity_start: 'es',
    equity_end: 'ee',
    net_transfer: 'nt',
    investment_balance_start: 'ib',
    investment_balance_end: 'ib1',
    net_investment: 'ni'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    ma: 'main_account_id',
    ap: 'aggregated_pnl',
    ip: 'investment_pnl',
    es: 'equity_start',
    ee: 'equity_end',
    nt: 'net_transfer',
    ib: 'investment_balance_start',
    ib1: 'investment_balance_end',
    ni: 'net_investment'
  }
})
