import { type SchemaPairMap } from './types'
import { CLIENT_ORDER_I_DS_BY_GROUP_MAP } from './client_order_i_ds_by_group'

// Schema map for the 'WS_ORDER_GROUP_FEED_DATA_V_1' struct.
export const WS_ORDER_GROUP_FEED_DATA_V_1_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    stream: 's',
    selector: 's1',
    sequence_number: 'sn',
    feed: ['f', CLIENT_ORDER_I_DS_BY_GROUP_MAP.FULL_TO_LITE],
    prev_sequence_number: 'ps'
  },
  LITE_TO_FULL: {
    s: 'stream',
    s1: 'selector',
    sn: 'sequence_number',
    f: ['feed', CLIENT_ORDER_I_DS_BY_GROUP_MAP.LITE_TO_FULL],
    ps: 'prev_sequence_number'
  }
})
