import { type SchemaPairMap } from './types'

// Schema map for the 'WS_REQUEST_V_1' struct.
export const WS_REQUEST_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    feed: 'f',
    method: 'm'
  },
  LITE_TO_FULL: {
    s: 'stream',
    f: 'feed',
    m: 'method'
  }
})
