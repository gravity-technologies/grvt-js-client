import { type SchemaPairMap } from './types'

// Schema map for the 'WS_UNSUBSCRIBE_PARAMS' struct.
export const WS_UNSUBSCRIBE_PARAMS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    selectors: 's1',
    use_global_sequence_number: 'ug'
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'selectors',
    ug: 'use_global_sequence_number'
  }
})
