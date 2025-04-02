import { type SchemaPairMap } from './types'

// Schema map for the 'MARGIN_TIER_RESPONSE' struct.
export const MARGIN_TIER_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    lower_bound: 'lb',
    rate: 'r'
  },
  LITE_TO_FULL: {
    lb: 'lower_bound',
    r: 'rate'
  }
})
