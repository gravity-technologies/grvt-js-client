import { type SchemaPairMap } from './types'
import { ECN_TO_BROKER_FEED_MAP } from './ecn_to_broker_feed'

// Schema map for the 'WSECN_TO_BROKER_FEED_DATA_V_1' struct.
export const WSECN_TO_BROKER_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    selector: 's1',
    sequence_number: 'sn',
    feed: ['f', ECN_TO_BROKER_FEED_MAP.FULL_TO_LITE],
    prev_sequence_number: 'ps'
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'selector',
    sn: 'sequence_number',
    f: ['feed', ECN_TO_BROKER_FEED_MAP.LITE_TO_FULL],
    ps: 'prev_sequence_number'
  }
})
