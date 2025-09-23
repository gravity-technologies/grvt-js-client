import { type SchemaPairMap } from './types'

// Schema map for the 'CEV_ALLOC_STATS_VAULT_LEVEL' struct.
export const CEV_ALLOC_STATS_VAULT_LEVEL_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_id: 'vi',
    invested_size: 'is',
    pending_invest_size: 'pi',
    pending_redeem_size: 'pr'
  },
  LITE_TO_FULL: {
    vi: 'vault_id',
    is: 'invested_size',
    pi: 'pending_invest_size',
    pr: 'pending_redeem_size'
  }
})
