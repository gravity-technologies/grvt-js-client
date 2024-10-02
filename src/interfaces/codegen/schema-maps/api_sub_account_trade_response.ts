import { type SchemaPairMap } from './types'
import { SUB_ACCOUNT_TRADE_MAP } from './sub_account_trade'

// Schema map for the 'API_SUB_ACCOUNT_TRADE_RESPONSE' struct.
export const API_SUB_ACCOUNT_TRADE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [SUB_ACCOUNT_TRADE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [SUB_ACCOUNT_TRADE_MAP.LITE_TO_FULL]]
  }
})
