import { type SchemaPairMap } from './types'

// Schema map for the 'WS_RESPONSE_V_1' struct.
export const WS_RESPONSE_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    request_id: 'ri',
    stream: 's',
    subs: 's1',
    unsubs: 'u',
    num_snapshots: 'ns',
    first_sequence_number: 'fs'
  },
  LITE_TO_FULL: {
    ri: 'request_id',
    s: 'stream',
    s1: 'subs',
    u: 'unsubs',
    ns: 'num_snapshots',
    fs: 'first_sequence_number'
  }
})
