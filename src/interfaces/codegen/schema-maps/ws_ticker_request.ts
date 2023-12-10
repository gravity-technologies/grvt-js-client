import { type SchemaPairMap } from './types'

// Schema map for the 'WS_TICKER_REQUEST' struct.
export const WS_TICKER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    rate: 'r',
    greeks: 'g'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    r: 'rate',
    g: 'greeks'
  }
})
