import { type SchemaPairMap } from './types'
import { SPOT_BALANCE_MAP } from './api_spot_balance'
import { VAULT_INVESTMENT_MAP } from './vault_investment'

// Schema map for the 'DETAILED_AGGREGATED_ACCOUNT_SUMMARY' struct.
export const DETAILED_AGGREGATED_ACCOUNT_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    total_equity: 'te',
    spot_balances: ['sb', [SPOT_BALANCE_MAP.FULL_TO_LITE]],
    vault_investments: ['vi', [VAULT_INVESTMENT_MAP.FULL_TO_LITE]],
    funding_account_balance: 'fa',
    total_sub_account_balance: 'ts',
    total_vault_investments_balance: 'tv',
    funding_account_equity: 'fa1',
    total_sub_account_equity: 'ts1',
    total_sub_account_available_balance: 'ts2'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    te: 'total_equity',
    sb: ['spot_balances', [SPOT_BALANCE_MAP.LITE_TO_FULL]],
    vi: ['vault_investments', [VAULT_INVESTMENT_MAP.LITE_TO_FULL]],
    fa: 'funding_account_balance',
    ts: 'total_sub_account_balance',
    tv: 'total_vault_investments_balance',
    fa1: 'funding_account_equity',
    ts1: 'total_sub_account_equity',
    ts2: 'total_sub_account_available_balance'
  }
})
