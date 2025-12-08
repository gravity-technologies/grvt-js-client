import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ISOLATED_POSITION_MARGIN_LIMITS_RESPONSE' struct.
export const API_GET_ISOLATED_POSITION_MARGIN_LIMITS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    max_addable_amount: 'ma',
    max_removable_amount: 'mr'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    ma: 'max_addable_amount',
    mr: 'max_removable_amount'
  }
})
