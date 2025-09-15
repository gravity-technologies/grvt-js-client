import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ACTIVE_ACCOUNT_MULTIPLIER_VALUE_REQUEST' struct.
export const API_GET_ACTIVE_ACCOUNT_MULTIPLIER_VALUE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    off_chain_account_id: 'oc',
    filter_by_off_chain_account_id: 'fb',
    account_type: 'at',
    metric: 'm'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    oc: 'off_chain_account_id',
    fb: 'filter_by_off_chain_account_id',
    at: 'account_type',
    m: 'metric'
  }
})
