import { type SchemaPairMap } from './types'

// Schema map for the 'ASSET' struct.
export const ASSET_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    kind: 'k',
    underlying: 'u',
    quote: 'q',
    expiration: 'e',
    strike_price: 's'
  },
  LITE_TO_FULL: {
    k: 'kind',
    u: 'underlying',
    q: 'quote',
    e: 'expiration',
    s: 'strike_price'
  }
})
