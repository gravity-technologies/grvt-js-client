import { type SchemaPairMap } from './types'
import { SPOT_BALANCE_MAP } from './api_spot_balance'
import { VAULT_INVESTMENT_MAP } from './vault_investment'

// Schema map for the 'AGGREGATED_ACCOUNT_SUMMARY' struct.
export const AGGREGATED_ACCOUNT_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    total_equity: 'te',
    spot_balances: ['sb', [SPOT_BALANCE_MAP.FULL_TO_LITE]],
    vault_investments: ['vi', [VAULT_INVESTMENT_MAP.FULL_TO_LITE]],
    total_sub_account_balance: 'ts',
    total_sub_account_equity: 'ts1',
    total_vault_investments_balance: 'tv',
    total_sub_account_available_balance: 'ts2',
    total_usd_notional_invested: 'tu'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    te: 'total_equity',
    sb: ['spot_balances', [SPOT_BALANCE_MAP.LITE_TO_FULL]],
    vi: ['vault_investments', [VAULT_INVESTMENT_MAP.LITE_TO_FULL]],
    ts: 'total_sub_account_balance',
    ts1: 'total_sub_account_equity',
    tv: 'total_vault_investments_balance',
    ts2: 'total_sub_account_available_balance',
    tu: 'total_usd_notional_invested'
  }
})
