import { type SchemaPairMap } from './types'

// Schema map for the 'ORDER_METADATA' struct.
export const ORDER_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    client_order_id: 'co',
    create_time: 'ct'
  },
  LITE_TO_FULL: {
    co: 'client_order_id',
    ct: 'create_time'
  }
})
