import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_FAST_MARKET_INFO_RESPONSE' struct.
export const API_GET_FAST_MARKET_INFO_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    ask_fast_market_multiplier: 'af',
    bid_fast_market_multiplier: 'bf'
  },
  LITE_TO_FULL: {
    af: 'ask_fast_market_multiplier',
    bf: 'bid_fast_market_multiplier'
  }
})
