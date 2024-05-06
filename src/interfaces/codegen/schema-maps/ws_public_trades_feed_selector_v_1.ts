import { type SchemaPairMap } from './types'

// Schema map for the 'WS_PUBLIC_TRADES_FEED_SELECTOR_V_1' struct.
export const WS_PUBLIC_TRADES_FEED_SELECTOR_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    limit: 'l'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    l: 'limit'
  }
})
