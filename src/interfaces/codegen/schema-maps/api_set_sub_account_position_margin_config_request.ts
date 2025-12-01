import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'API_SET_SUB_ACCOUNT_POSITION_MARGIN_CONFIG_REQUEST' struct.
export const API_SET_SUB_ACCOUNT_POSITION_MARGIN_CONFIG_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    instrument: 'i',
    margin_type: 'mt',
    leverage: 'l',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    i: 'instrument',
    mt: 'margin_type',
    l: 'leverage',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL]
  }
})
