import { type SchemaPairMap } from './types'

// Schema map for the 'CEV_ACCESS_TIER_OVERWRITE' struct.
export const CEV_ACCESS_TIER_OVERWRITE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    access_tier_level: 'at',
    allocation_max_cap: 'am'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    at: 'access_tier_level',
    am: 'allocation_max_cap'
  }
})
