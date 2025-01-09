import { type SchemaPairMap } from './types'

// Schema map for the 'API_SET_INITIAL_LEVERAGE_REQUEST' struct.
export const API_SET_INITIAL_LEVERAGE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    instrument: 'i',
    leverage: 'l'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    i: 'instrument',
    l: 'leverage'
  }
})
