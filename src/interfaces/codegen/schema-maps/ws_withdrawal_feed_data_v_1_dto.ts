import { type SchemaPairMap } from './types'
import { WITHDRAWAL_MAP } from './withdrawal'

// Schema map for the 'WS_WITHDRAWAL_FEED_DATA_V_1_DTO' struct.
export const WS_WITHDRAWAL_FEED_DATA_V_1_DTO_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', WITHDRAWAL_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', WITHDRAWAL_MAP.LITE_TO_FULL]
  }
})
