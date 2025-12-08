import { type SchemaPairMap } from './types'
import { API_AUTHORIZED_BUILDER_MAP } from './api_authorized_builder'

// Schema map for the 'API_GET_AUTHORIZED_BUILDERS_RESPONSE' struct.
export const API_GET_AUTHORIZED_BUILDERS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [API_AUTHORIZED_BUILDER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [API_AUTHORIZED_BUILDER_MAP.LITE_TO_FULL]]
  }
})
