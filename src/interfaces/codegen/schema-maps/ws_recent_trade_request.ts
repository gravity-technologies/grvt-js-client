import { type SchemaPairMap } from './types'

// Schema map for the 'WS_RECENT_TRADE_REQUEST' struct.
export const WS_RECENT_TRADE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    venue: 'v',
    limit: 'l'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    v: 'venue',
    l: 'limit'
  }
})
