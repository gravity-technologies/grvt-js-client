import { type SchemaPairMap } from './types'

// Schema map for the 'BATCH_CREATE_ACCOUNT_MULTIPLIER_ELEMENT' struct.
export const BATCH_CREATE_ACCOUNT_MULTIPLIER_ELEMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    off_chain_account_id: 'oc',
    account_type: 'at',
    multiplier: 'm'
  },
  LITE_TO_FULL: {
    oc: 'off_chain_account_id',
    at: 'account_type',
    m: 'multiplier'
  }
})
