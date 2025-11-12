import { type SchemaPairMap } from './types'

// Schema map for the 'INJECTED_POINT_REQUEST_ELEMENT' struct.
export const INJECTED_POINT_REQUEST_ELEMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    off_chain_account_id: 'oc',
    points: 'p'
  },
  LITE_TO_FULL: {
    oc: 'off_chain_account_id',
    p: 'points'
  }
})
