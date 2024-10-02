import { type SchemaPairMap } from './types'

// Schema map for the 'WS_REQUEST_V_1' struct.
export const WS_REQUEST_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    request_id: 'ri',
    stream: 's',
    feed: 'f',
    method: 'm',
    is_full: 'if'
  },
  LITE_TO_FULL: {
    ri: 'request_id',
    s: 'stream',
    f: 'feed',
    m: 'method',
    if: 'is_full'
  }
})
