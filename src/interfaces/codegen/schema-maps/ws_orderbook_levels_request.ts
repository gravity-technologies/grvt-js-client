import { type SchemaPairMap } from './types'

// Schema map for the 'WS_ORDERBOOK_LEVELS_REQUEST' struct.
export const WS_ORDERBOOK_LEVELS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    rate: 'r',
    depth: 'd',
    aggregate: 'a',
    expiration: 'e',
    strike_price: 'sp'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    r: 'rate',
    d: 'depth',
    a: 'aggregate',
    e: 'expiration',
    sp: 'strike_price'
  }
})
