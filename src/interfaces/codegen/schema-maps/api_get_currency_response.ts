import { type SchemaPairMap } from './types'
import { CURRENCY_DETAIL_MAP } from './currency_detail'

// Schema map for the 'API_GET_CURRENCY_RESPONSE' struct.
export const API_GET_CURRENCY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [CURRENCY_DETAIL_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [CURRENCY_DETAIL_MAP.LITE_TO_FULL]]
  }
})
