import { type SchemaPairMap } from './types'

// Schema map for the 'WS_SUBSCRIBE_RESULT' struct.
export const WS_SUBSCRIBE_RESULT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    subs: 's1',
    unsubs: 'u',
    num_snapshots: 'ns',
    first_sequence_number: 'fs'
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'subs',
    u: 'unsubs',
    ns: 'num_snapshots',
    fs: 'first_sequence_number'
  }
})
