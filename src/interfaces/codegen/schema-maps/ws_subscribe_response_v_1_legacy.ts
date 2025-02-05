import { type SchemaPairMap } from './types'

// Schema map for the 'WS_SUBSCRIBE_RESPONSE_V_1_LEGACY' struct.
export const WS_SUBSCRIBE_RESPONSE_V_1_LEGACY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    request_id: 'ri',
    stream: 's',
    subs: 's1',
    unsubs: 'u',
    num_snapshots: 'ns',
    first_sequence_number: 'fs',
    latest_sequence_number: 'ls'
  },
  LITE_TO_FULL: {
    ri: 'request_id',
    s: 'stream',
    s1: 'subs',
    u: 'unsubs',
    ns: 'num_snapshots',
    fs: 'first_sequence_number',
    ls: 'latest_sequence_number'
  }
})
