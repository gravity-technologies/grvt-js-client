import { type SchemaPairMap } from './types'

// Schema map for the 'API_PRE_DEPOSIT_CHECK_REQUEST' struct.
export const API_PRE_DEPOSIT_CHECK_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    currency: 'c',
    bridge: 'b'
  },
  LITE_TO_FULL: {
    c: 'currency',
    b: 'bridge'
  }
})
