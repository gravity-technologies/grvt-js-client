import { type SchemaPairMap } from './types'

// Schema map for the 'CLIENT_ORDER_I_DS_BY_GROUP' struct.
export const CLIENT_ORDER_I_DS_BY_GROUP_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    group_id: 'gi',
    client_order_id: 'co',
    sub_account_id: 'sa'
  },
  LITE_TO_FULL: {
    gi: 'group_id',
    co: 'client_order_id',
    sa: 'sub_account_id'
  }
})
