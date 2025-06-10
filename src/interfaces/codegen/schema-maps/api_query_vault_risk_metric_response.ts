import { type SchemaPairMap } from './types'

// Schema map for the 'API_QUERY_VAULT_RISK_METRIC_RESPONSE' struct.
export const API_QUERY_VAULT_RISK_METRIC_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sharpe_ratio: 'sr',
    sortino_ratio: 'sr1',
    max_drawdown: 'md'
  },
  LITE_TO_FULL: {
    sr: 'sharpe_ratio',
    sr1: 'sortino_ratio',
    md: 'max_drawdown'
  }
})
