import { type SchemaPairMap } from './types'

// Schema map for the 'API_FIND_ACCOUNT_MULTIPLIER_REQUEST' struct.
export const API_FIND_ACCOUNT_MULTIPLIER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    off_chain_account_id: 'oc',
    filter_by_off_chain_account_id: 'fb',
    account_type: 'at',
    metric: 'm',
    epoch: 'e',
    status: 's',
    page: 'p',
    limit: 'l'
  },
  LITE_TO_FULL: {
    oc: 'off_chain_account_id',
    fb: 'filter_by_off_chain_account_id',
    at: 'account_type',
    m: 'metric',
    e: 'epoch',
    s: 'status',
    p: 'page',
    l: 'limit'
  }
})
