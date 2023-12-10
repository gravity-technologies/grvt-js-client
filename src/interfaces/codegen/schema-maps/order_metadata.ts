import { type SchemaPairMap } from './types'

// Schema map for the 'ORDER_METADATA' struct.
export const ORDER_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    client_order_id: 'co',
    take_profit_trigger_condition: 'tp',
    stop_loss_trigger_condition: 'sl',
    take_profit_trigger_price: 'tp1',
    stop_loss_trigger_price: 'sl1',
    create_time: 'ct'
  },
  LITE_TO_FULL: {
    co: 'client_order_id',
    tp: 'take_profit_trigger_condition',
    sl: 'stop_loss_trigger_condition',
    tp1: 'take_profit_trigger_price',
    sl1: 'stop_loss_trigger_price',
    ct: 'create_time'
  }
})
