import { type SchemaPairMap } from './types'

// Schema map for the 'TPSL_ORDER_METADATA' struct.
export const TPSL_ORDER_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    trigger_by: 'tb',
    trigger_price: 'tp'
  },
  LITE_TO_FULL: {
    tb: 'trigger_by',
    tp: 'trigger_price'
  }
})
