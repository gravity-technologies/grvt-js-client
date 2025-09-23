import { type SchemaPairMap } from './types'

// Schema map for the 'API_CREATE_ACCOUNT_MULTIPLIER_REQUEST' struct.
export const API_CREATE_ACCOUNT_MULTIPLIER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    metric: 'm',
    off_chain_account_id: 'oc',
    account_type: 'at',
    multiplier: 'm1',
    effective_epoch_start: 'ee',
    effective_epoch_end: 'ee1'
  },
  LITE_TO_FULL: {
    m: 'metric',
    oc: 'off_chain_account_id',
    at: 'account_type',
    m1: 'multiplier',
    ee: 'effective_epoch_start',
    ee1: 'effective_epoch_end'
  }
})
