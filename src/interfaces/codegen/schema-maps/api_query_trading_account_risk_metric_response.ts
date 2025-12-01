import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_TRADING_ACCOUNT_RISK_METRIC_RESPONSE' struct.
export const API_QUERY_TRADING_ACCOUNT_RISK_METRIC_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    pnl_volatility: 'pv',
    sharpe_ratio: 'sr',
    max_drawdown: 'md'
  },
  LITE_TO_FULL: {
    pv: 'pnl_volatility',
    sr: 'sharpe_ratio',
    md: 'max_drawdown'
  }
})
