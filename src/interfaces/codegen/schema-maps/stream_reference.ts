import { type SchemaPairMap } from './types'

// Schema map for the 'STREAM_REFERENCE' struct.
export const STREAM_REFERENCE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    selectors: 's1'
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'selectors'
  }
})
