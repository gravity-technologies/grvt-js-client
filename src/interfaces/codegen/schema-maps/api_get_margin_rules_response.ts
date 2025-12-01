import { type SchemaPairMap } from './types'
import { RISK_BRACKET_MAP } from './risk_bracket'

// Schema map for the 'API_GET_MARGIN_RULES_RESPONSE' struct.
export const API_GET_MARGIN_RULES_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    max_position_size: 'mp',
    risk_brackets: ['rb', [RISK_BRACKET_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    i: 'instrument',
    mp: 'max_position_size',
    rb: ['risk_brackets', [RISK_BRACKET_MAP.LITE_TO_FULL]]
  }
})
