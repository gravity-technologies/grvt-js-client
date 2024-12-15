import { type SchemaPairMap } from './types'
import { PRE_ORDER_CHECK_RESULT_MAP } from './pre_order_check_result'

// Schema map for the 'API_PRE_ORDER_CHECK_RESPONSE' struct.
export const API_PRE_ORDER_CHECK_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [PRE_ORDER_CHECK_RESULT_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['results', [PRE_ORDER_CHECK_RESULT_MAP.LITE_TO_FULL]]
  }
})
