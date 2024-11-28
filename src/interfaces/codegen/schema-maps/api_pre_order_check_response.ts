import { type SchemaPairMap } from './types'
import { ASSET_MAX_QTY_MAP } from './asset_max_qty'

// Schema map for the 'API_PRE_ORDER_CHECK_RESPONSE' struct.
export const API_PRE_ORDER_CHECK_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    max_qty: ['mq', [ASSET_MAX_QTY_MAP.FULL_TO_LITE]],
    margin_required: 'mr',
    order_valid: 'ov',
    reason: 'r',
    settle_currency: 'sc'
  },
  LITE_TO_FULL: {
    mq: ['max_qty', [ASSET_MAX_QTY_MAP.LITE_TO_FULL]],
    mr: 'margin_required',
    ov: 'order_valid',
    r: 'reason',
    sc: 'settle_currency'
  }
})
