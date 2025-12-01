import { type SchemaPairMap } from './types'

// Schema map for the 'API_POINT_INJECTION_HISTORY_REQUEST' struct.
export const API_POINT_INJECTION_HISTORY_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    off_chain_account_id: 'oc',
    page: 'p',
    limit: 'l'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    oc: 'off_chain_account_id',
    p: 'page',
    l: 'limit'
  }
})
