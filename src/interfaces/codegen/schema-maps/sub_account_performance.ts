import { type SchemaPairMap } from './types'

// Schema map for the 'SUB_ACCOUNT_PERFORMANCE' struct.
export const SUB_ACCOUNT_PERFORMANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    sub_account_id: 'sa',
    pnl: 'p',
    equity_start: 'es',
    equity_end: 'ee',
    net_transfer: 'nt',
    currency: 'c'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    sa: 'sub_account_id',
    p: 'pnl',
    es: 'equity_start',
    ee: 'equity_end',
    nt: 'net_transfer',
    c: 'currency'
  }
})
