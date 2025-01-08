import { type SchemaPairMap } from './types'
import { INITIAL_LEVERAGE_RESULT_MAP } from './initial_leverage_result'

// Schema map for the 'API_GET_ALL_INITIAL_LEVERAGE_RESPONSE' struct.
export const API_GET_ALL_INITIAL_LEVERAGE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [INITIAL_LEVERAGE_RESULT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [INITIAL_LEVERAGE_RESULT_MAP.LITE_TO_FULL]]
  }
})
