import { type SchemaPairMap } from './types'
import { CLIENT_ORDER_I_DS_BY_GROUP_MAP } from './client_order_i_ds_by_group'

// Schema map for the 'API_GET_ORDER_GROUP_RESPONSE' struct.
export const API_GET_ORDER_GROUP_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [CLIENT_ORDER_I_DS_BY_GROUP_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [CLIENT_ORDER_I_DS_BY_GROUP_MAP.LITE_TO_FULL]]
  }
})
