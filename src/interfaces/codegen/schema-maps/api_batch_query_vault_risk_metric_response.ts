import { type SchemaPairMap } from './types'
import { VAULT_RISK_METRIC_MAP } from './vault_risk_metric'

// Schema map for the 'API_BATCH_QUERY_VAULT_RISK_METRIC_RESPONSE' struct.
export const API_BATCH_QUERY_VAULT_RISK_METRIC_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [VAULT_RISK_METRIC_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [VAULT_RISK_METRIC_MAP.LITE_TO_FULL]]
  }
})
