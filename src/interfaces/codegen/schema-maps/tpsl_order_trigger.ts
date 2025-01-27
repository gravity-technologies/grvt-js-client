import { type SchemaPairMap } from './types'

// Schema map for the 'TPSL_ORDER_TRIGGER' struct.
export const TPSL_ORDER_TRIGGER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    trigger_type: 'tt',
    trigger_point: 'tp',
    conditional_client_order_id: 'cc'
  },
  LITE_TO_FULL: {
    tt: 'trigger_type',
    tp: 'trigger_point',
    cc: 'conditional_client_order_id'
  }
})
