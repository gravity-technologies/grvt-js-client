import { type SchemaPairMap } from './types'

// Schema map for the 'RFQ_STATE' struct.
export const RFQ_STATE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    rfq_status: 'rs',
    reject_reason: 'rr',
    update_time: 'ut'
  },
  LITE_TO_FULL: {
    rs: 'rfq_status',
    rr: 'reject_reason',
    ut: 'update_time'
  }
})
