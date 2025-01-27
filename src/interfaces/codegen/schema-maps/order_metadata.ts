import { type SchemaPairMap } from './types'
import { TRIGGER_ORDER_METADATA_MAP } from './trigger_order_metadata'

// Schema map for the 'ORDER_METADATA' struct.
export const ORDER_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    client_order_id: 'co',
    create_time: 'ct',
    trigger_order_metadata: ['to', TRIGGER_ORDER_METADATA_MAP.FULL_TO_LITE],
    broker: 'b'
  },
  LITE_TO_FULL: {
    co: 'client_order_id',
    ct: 'create_time',
    to: ['trigger_order_metadata', TRIGGER_ORDER_METADATA_MAP.LITE_TO_FULL],
    b: 'broker'
  }
})
