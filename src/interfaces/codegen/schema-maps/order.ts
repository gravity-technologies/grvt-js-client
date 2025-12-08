import { type SchemaPairMap } from './types'
import { ORDER_LEG_MAP } from './order_leg'
import { SIGNATURE_MAP } from './signature'
import { ORDER_METADATA_MAP } from './order_metadata'
import { ORDER_STATE_MAP } from './order_state'

// Schema map for the 'ORDER' struct.
export const ORDER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    order_id: 'oi',
    sub_account_id: 'sa',
    is_market: 'im',
    time_in_force: 'ti',
    post_only: 'po',
    reduce_only: 'ro',
    legs: ['l', [ORDER_LEG_MAP.FULL_TO_LITE]],
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE],
    metadata: ['m', ORDER_METADATA_MAP.FULL_TO_LITE],
    state: ['s1', ORDER_STATE_MAP.FULL_TO_LITE],
    is_liquidation: 'il',
    is_derisk: 'id',
    builder: 'b',
    builder_fee: 'bf'
  },
  LITE_TO_FULL: {
    oi: 'order_id',
    sa: 'sub_account_id',
    im: 'is_market',
    ti: 'time_in_force',
    po: 'post_only',
    ro: 'reduce_only',
    l: ['legs', [ORDER_LEG_MAP.LITE_TO_FULL]],
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL],
    m: ['metadata', ORDER_METADATA_MAP.LITE_TO_FULL],
    s1: ['state', ORDER_STATE_MAP.LITE_TO_FULL],
    il: 'is_liquidation',
    id: 'is_derisk',
    b: 'builder',
    bf: 'builder_fee'
  }
})
