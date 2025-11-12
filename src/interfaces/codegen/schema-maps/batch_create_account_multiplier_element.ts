import { type SchemaPairMap } from './types'
import { REWARD_ACCOUNT_MULTIPLIER_METADATA_MAP } from './reward_account_multiplier_metadata'

// Schema map for the 'BATCH_CREATE_ACCOUNT_MULTIPLIER_ELEMENT' struct.
export const BATCH_CREATE_ACCOUNT_MULTIPLIER_ELEMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    off_chain_account_id: 'oc',
    account_type: 'at',
    multiplier: 'm',
    metadata: ['m1', REWARD_ACCOUNT_MULTIPLIER_METADATA_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    oc: 'off_chain_account_id',
    at: 'account_type',
    m: 'multiplier',
    m1: ['metadata', REWARD_ACCOUNT_MULTIPLIER_METADATA_MAP.LITE_TO_FULL]
  }
})
