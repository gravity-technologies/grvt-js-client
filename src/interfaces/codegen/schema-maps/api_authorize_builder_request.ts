import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'API_AUTHORIZE_BUILDER_REQUEST' struct.
export const API_AUTHORIZE_BUILDER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    builder_account_id: 'ba',
    max_futures_fee_rate: 'mf',
    max_spot_fee_rate: 'ms',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    ba: 'builder_account_id',
    mf: 'max_futures_fee_rate',
    ms: 'max_spot_fee_rate',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL]
  }
})
