import { type SchemaPairMap } from './types'
import { POSITIONS_MAP } from './api_position'

// Schema map for the 'WS_POSITIONS_FEED_DATA_V_1' struct.
export const WS_POSITIONS_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    selector: 's1',
    sequence_number: 'sn',
    feed: ['f', POSITIONS_MAP.FULL_TO_LITE],
    prev_sequence_number: 'ps'
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'selector',
    sn: 'sequence_number',
    f: ['feed', POSITIONS_MAP.LITE_TO_FULL],
    ps: 'prev_sequence_number'
  }
})
