import { type SchemaPairMap } from './types'

// Schema map for the 'API_CANCEL_ALL_ORDERS_RESPONSE' struct.
export const API_CANCEL_ALL_ORDERS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    num_cancelled: 'nc'
  },
  LITE_TO_FULL: {
    nc: 'num_cancelled'
  }
})
