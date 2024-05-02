import { type SchemaPairMap } from './types'

// Schema map for the 'WS_TICKER_REQUEST_V_1' struct.
export const WS_TICKER_REQUEST_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    rate: 'r'
  },
  LITE_TO_FULL: {
    a: 'asset',
    r: 'rate'
  }
})
