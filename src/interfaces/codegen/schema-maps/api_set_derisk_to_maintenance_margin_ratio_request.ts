import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'API_SET_DERISK_TO_MAINTENANCE_MARGIN_RATIO_REQUEST' struct.
export const API_SET_DERISK_TO_MAINTENANCE_MARGIN_RATIO_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    ratio: 'r',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    r: 'ratio',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL]
  }
})
