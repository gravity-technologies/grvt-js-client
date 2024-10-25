import { type SchemaPairMap } from './types'
import { ORDER_LEG_MAP } from './order_leg'

// Schema map for the 'INTERNAL_PRE_ORDER_MARGIN_CHECK_REQUEST' struct.
export const INTERNAL_PRE_ORDER_MARGIN_CHECK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    open_order_legs: ['oo', [ORDER_LEG_MAP.FULL_TO_LITE]],
    new_order_legs: ['no', [ORDER_LEG_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    oo: ['open_order_legs', [ORDER_LEG_MAP.LITE_TO_FULL]],
    no: ['new_order_legs', [ORDER_LEG_MAP.LITE_TO_FULL]]
  }
})
