import { type SchemaPairMap } from './types'

// Schema map for the 'WS_MINI_TICKER_REQUEST' struct.
export const WS_MINI_TICKER_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    rate: 'r',
    expiration: 'e',
    strike_price: 'sp'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    r: 'rate',
    e: 'expiration',
    sp: 'strike_price'
  }
})
