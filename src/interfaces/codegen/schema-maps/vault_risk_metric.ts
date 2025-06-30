import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_RISK_METRIC' struct.
export const VAULT_RISK_METRIC_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    sharpe_ratio: 'sr',
    sortino_ratio: 'sr1',
    max_drawdown: 'md'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    sr: 'sharpe_ratio',
    sr1: 'sortino_ratio',
    md: 'max_drawdown'
  }
})
