import { type SchemaPairMap } from './types'

// Schema map for the 'WS_UNSUBSCRIBE_RESULT' struct.
export const WS_UNSUBSCRIBE_RESULT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    unsubs: 'u'
  },
  LITE_TO_FULL: {
    s: 'stream',
    u: 'unsubs'
  }
})
