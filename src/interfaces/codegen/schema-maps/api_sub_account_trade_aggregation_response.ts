import { type SchemaPairMap } from './types'
import { SUB_ACCOUNT_TRADE_AGGREGATION_MAP } from './sub_account_trade_aggregation'

// Schema map for the 'API_SUB_ACCOUNT_TRADE_AGGREGATION_RESPONSE' struct.
export const API_SUB_ACCOUNT_TRADE_AGGREGATION_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    results: ['r', [SUB_ACCOUNT_TRADE_AGGREGATION_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['results', [SUB_ACCOUNT_TRADE_AGGREGATION_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
