import { type SchemaPairMap } from './types'
import { API_CLUSTER_CONFIG_MAP } from './api_cluster_config'

// Schema map for the 'API_GET_CLUSTER_CONFIGS_RESPONSE' struct.
export const API_GET_CLUSTER_CONFIGS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [API_CLUSTER_CONFIG_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [API_CLUSTER_CONFIG_MAP.LITE_TO_FULL]]
  }
})
