import { type SchemaPairMap } from './types'

// Schema map for the 'REWARD_ACCOUNT_MULTIPLIER_METADATA' struct.
export const REWARD_ACCOUNT_MULTIPLIER_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    ambassador_tier: 'at',
    referrer_account_id: 'ra',
    note: 'n',
    metadata_type: 'mt'
  },
  LITE_TO_FULL: {
    at: 'ambassador_tier',
    ra: 'referrer_account_id',
    n: 'note',
    mt: 'metadata_type'
  }
})
