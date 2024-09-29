import { type SchemaPairMap } from './types'
import { DEPOSIT_MAP } from './deposit'

// Schema map for the 'WS_DEPOSIT_FEED_DATA_V_1' struct.
export const WS_DEPOSIT_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    selector: 's1',
    sequence_number: 'sn',
    feed: ['f', DEPOSIT_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'selector',
    sn: 'sequence_number',
    f: ['feed', DEPOSIT_MAP.LITE_TO_FULL]
  }
})
