import { type SchemaPairMap } from './types'
import { TPSL_ORDER_METADATA_MAP } from './tpsl_order_metadata'

// Schema map for the 'TRIGGER_ORDER_METADATA' struct.
export const TRIGGER_ORDER_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    trigger_type: 'tt',
    tpsl: ['t', TPSL_ORDER_METADATA_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    tt: 'trigger_type',
    t: ['tpsl', TPSL_ORDER_METADATA_MAP.LITE_TO_FULL]
  }
})
