import { type SchemaPairMap } from './types'
import { STREAM_REFERENCE_MAP } from './stream_reference'

// Schema map for the 'WS_LIST_STREAMS_RESULT' struct.
export const WS_LIST_STREAMS_RESULT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream_reference: ['sr', [STREAM_REFERENCE_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    sr: ['stream_reference', [STREAM_REFERENCE_MAP.LITE_TO_FULL]]
  }
})
