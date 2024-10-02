import { type SchemaPairMap } from './types'
import { SPOT_BALANCE_MAP } from './api_spot_balance'

// Schema map for the 'AGGREGATED_ACCOUNT_SUMMARY' struct.
export const AGGREGATED_ACCOUNT_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    total_equity: 'te',
    spot_balances: ['sb', [SPOT_BALANCE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    te: 'total_equity',
    sb: ['spot_balances', [SPOT_BALANCE_MAP.LITE_TO_FULL]]
  }
})
