import { type SchemaPairMap } from './types'
import { POSITIONS_MAP } from './api_position'

// Schema map for the 'WS_POSITIONS_RESPONSE_V_1' struct.
export const WS_POSITIONS_RESPONSE_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', POSITIONS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', POSITIONS_MAP.LITE_TO_FULL]
  }
})
