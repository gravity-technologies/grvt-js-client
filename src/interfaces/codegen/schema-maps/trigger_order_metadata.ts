import { type SchemaPairMap } from './types'
import { TPSL_ORDER_TRIGGER_MAP } from './tpsl_order_trigger'

// Schema map for the 'TRIGGER_ORDER_METADATA' struct.
export const TRIGGER_ORDER_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    trigger_order_type: 'to',
    tpsl_order_trigger: ['to1', TPSL_ORDER_TRIGGER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    to: 'trigger_order_type',
    to1: ['tpsl_order_trigger', TPSL_ORDER_TRIGGER_MAP.LITE_TO_FULL]
  }
})
