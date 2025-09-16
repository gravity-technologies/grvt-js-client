import { type SchemaPairMap } from './types'
import { CEV_ALLOC_STATS_ACC_OVERVIEW_MAP } from './cev_alloc_stats_acc_overview'
import { CEV_ALLOC_STATS_VAULT_LEVEL_MAP } from './cev_alloc_stats_vault_level'

// Schema map for the 'API_CROSS_EXCH_VAULT_GET_INVESTOR_ALLOCATION_STATS_RESPONSE' struct.
export const API_CROSS_EXCH_VAULT_GET_INVESTOR_ALLOCATION_STATS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    account_overview: ['ao', CEV_ALLOC_STATS_ACC_OVERVIEW_MAP.FULL_TO_LITE],
    per_vault: ['pv', [CEV_ALLOC_STATS_VAULT_LEVEL_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    ao: ['account_overview', CEV_ALLOC_STATS_ACC_OVERVIEW_MAP.LITE_TO_FULL],
    pv: ['per_vault', [CEV_ALLOC_STATS_VAULT_LEVEL_MAP.LITE_TO_FULL]]
  }
})
