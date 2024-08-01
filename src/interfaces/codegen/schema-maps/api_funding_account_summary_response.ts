import { type SchemaPairMap } from './types'
import { SPOT_BALANCE_MAP } from './api_spot_balance'
import { MARK_PRICE_MAP } from './api_mark_price'

// Schema map for the 'API_FUNDING_ACCOUNT_SUMMARY_RESPONSE' struct.
export const API_FUNDING_ACCOUNT_SUMMARY_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    total_equity: 'te',
    spot_balances: ['sb', [SPOT_BALANCE_MAP.FULL_TO_LITE]],
    mark_prices: ['mp', [MARK_PRICE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    te: 'total_equity',
    sb: ['spot_balances', [SPOT_BALANCE_MAP.LITE_TO_FULL]],
    mp: ['mark_prices', [MARK_PRICE_MAP.LITE_TO_FULL]]
  }
})
