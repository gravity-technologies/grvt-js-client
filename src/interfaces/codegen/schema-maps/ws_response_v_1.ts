import { type SchemaPairMap } from './types'

// Schema map for the 'WS_RESPONSE_V_1' struct.
export const WS_RESPONSE_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    request_id: 'ri',
    stream: 's',
    subs: 's1',
    unsubs: 'u'
  },
  LITE_TO_FULL: {
    ri: 'request_id',
    s: 'stream',
    s1: 'subs',
    u: 'unsubs'
  }
})
