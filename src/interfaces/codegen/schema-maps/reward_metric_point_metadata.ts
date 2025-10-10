import { type SchemaPairMap } from './types'

// Schema map for the 'REWARD_METRIC_POINT_METADATA' struct.
export const REWARD_METRIC_POINT_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    band_index: 'bi',
    account_multiplier: 'am',
    note: 'n'
  },
  LITE_TO_FULL: {
    bi: 'band_index',
    am: 'account_multiplier',
    n: 'note'
  }
})
