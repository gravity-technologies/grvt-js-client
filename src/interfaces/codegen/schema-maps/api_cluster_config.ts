import { type SchemaPairMap } from './types'

// Schema map for the 'API_CLUSTER_CONFIG' struct.
export const API_CLUSTER_CONFIG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    config_type: 'ct',
    config_name: 'cn',
    config_json_value: 'cj'
  },
  LITE_TO_FULL: {
    ct: 'config_type',
    cn: 'config_name',
    cj: 'config_json_value'
  }
})
