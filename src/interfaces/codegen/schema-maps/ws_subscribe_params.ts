import { type SchemaPairMap } from './types'

// Schema map for the 'WS_SUBSCRIBE_PARAMS' struct.
export const WS_SUBSCRIBE_PARAMS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    selectors: 's1'
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'selectors'
  }
})
