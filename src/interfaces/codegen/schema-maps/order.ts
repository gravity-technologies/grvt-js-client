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
    limit_price: 'lp',
    oco_limit_price: 'ol',
    taker_fee_percentage_cap: 'tf',
    maker_fee_percentage_cap: 'mf',
    post_only: 'po',
    reduce_only: 'ro',
    is_paying_base_currency: 'ip',
    legs: ['l', [ORDER_LEG_MAP.FULL_TO_LITE]],
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE],
    metadata: ['m', ORDER_METADATA_MAP.FULL_TO_LITE],
    state: ['s1', ORDER_STATE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    oi: 'order_id',
    sa: 'sub_account_id',
    im: 'is_market',
    ti: 'time_in_force',
    lp: 'limit_price',
    ol: 'oco_limit_price',
    tf: 'taker_fee_percentage_cap',
    mf: 'maker_fee_percentage_cap',
    po: 'post_only',
    ro: 'reduce_only',
    ip: 'is_paying_base_currency',
    l: ['legs', [ORDER_LEG_MAP.LITE_TO_FULL]],
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL],
    m: ['metadata', ORDER_METADATA_MAP.LITE_TO_FULL],
    s1: ['state', ORDER_STATE_MAP.LITE_TO_FULL]
  }
})
