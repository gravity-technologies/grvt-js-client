import { type SchemaPairMap } from './types'

// Schema map for the 'INITIAL_LEVERAGE_RESULT' struct.
export const INITIAL_LEVERAGE_RESULT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    leverage: 'l',
    min_leverage: 'ml',
    max_leverage: 'ml1',
    margin_type: 'mt'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    l: 'leverage',
    ml: 'min_leverage',
    ml1: 'max_leverage',
    mt: 'margin_type'
  }
})
