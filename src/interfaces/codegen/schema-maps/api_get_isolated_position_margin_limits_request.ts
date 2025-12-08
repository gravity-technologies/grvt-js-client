import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ISOLATED_POSITION_MARGIN_LIMITS_REQUEST' struct.
export const API_GET_ISOLATED_POSITION_MARGIN_LIMITS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    instrument: 'i'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    i: 'instrument'
  }
})
