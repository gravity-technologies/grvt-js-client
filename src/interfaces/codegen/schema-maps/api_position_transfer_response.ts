import { ORDER_MAP } from './order'
import { type SchemaPairMap } from './types'

// Schema map for the 'API_POSITION_TRANSFER_RESPONSE' struct.
export const API_POSITION_TRANSFER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    maker_order: ['mo', ORDER_MAP.FULL_TO_LITE],
    taker_order: ['to', ORDER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    mo: ['maker_order', ORDER_MAP.LITE_TO_FULL],
    to: ['taker_order', ORDER_MAP.LITE_TO_FULL]
  }
})
