import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'API_ADD_ISOLATED_POSITION_MARGIN_REQUEST' struct.
export const API_ADD_ISOLATED_POSITION_MARGIN_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    instrument: 'i',
    amount: 'a',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    i: 'instrument',
    a: 'amount',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL]
  }
})
