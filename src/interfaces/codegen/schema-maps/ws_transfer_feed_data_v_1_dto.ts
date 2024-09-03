import { type SchemaPairMap } from './types'
import { TRANSFER_MAP } from './transfer'

// Schema map for the 'WS_TRANSFER_FEED_DATA_V_1_DTO' struct.
export const WS_TRANSFER_FEED_DATA_V_1_DTO_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    sequence_number: 'sn',
    feed: ['f', TRANSFER_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 'stream',
    sn: 'sequence_number',
    f: ['feed', TRANSFER_MAP.LITE_TO_FULL]
  }
})
