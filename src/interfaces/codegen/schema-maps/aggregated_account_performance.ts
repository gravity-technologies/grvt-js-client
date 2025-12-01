import { type SchemaPairMap } from './types'

// Schema map for the 'AGGREGATED_ACCOUNT_PERFORMANCE' struct.
export const AGGREGATED_ACCOUNT_PERFORMANCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    main_account_id: 'ma',
    aggregated_pnl: 'ap',
    investment_pnl: 'ip'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    ma: 'main_account_id',
    ap: 'aggregated_pnl',
    ip: 'investment_pnl'
  }
})
