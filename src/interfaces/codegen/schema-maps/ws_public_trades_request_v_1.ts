import { type SchemaPairMap } from './types'

// Schema map for the 'WS_PUBLIC_TRADES_REQUEST_V_1' struct.
export const WS_PUBLIC_TRADES_REQUEST_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    limit: 'l'
  },
  LITE_TO_FULL: {
    a: 'asset',
    l: 'limit'
  }
})
