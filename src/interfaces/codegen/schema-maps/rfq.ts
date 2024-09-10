import { type SchemaPairMap } from './types'
import { RFQ_LEG_MAP } from './rfq_leg'
import { RFQ_BOOK_MAP } from './rfq_book'

import { RFQ_STATE_MAP } from './rfq_state'

// Schema map for the 'RFQ' struct.
export const RFQ_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_id: 'ri',
    sub_account_id: 'sa',
    is_public: 'ip',
    strategy: 's',
    expiry: 'e',
    receipients: 'r',
    is_anonymous: 'ia',
    allow_partial: 'ap',
    legs: ['l', [RFQ_LEG_MAP.FULL_TO_LITE]],
    bids: ['b', RFQ_BOOK_MAP.FULL_TO_LITE],
    asks: ['a', RFQ_BOOK_MAP.FULL_TO_LITE],
    create_time: 'ct',
    state: ['s1', RFQ_STATE_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    ri: 'rfq_id',
    sa: 'sub_account_id',
    ip: 'is_public',
    s: 'strategy',
    e: 'expiry',
    r: 'receipients',
    ia: 'is_anonymous',
    ap: 'allow_partial',
    l: ['legs', [RFQ_LEG_MAP.LITE_TO_FULL]],
    b: ['bids', RFQ_BOOK_MAP.LITE_TO_FULL],
    a: ['asks', RFQ_BOOK_MAP.LITE_TO_FULL],
    ct: 'create_time',
    s1: ['state', RFQ_STATE_MAP.LITE_TO_FULL]
  }
})
