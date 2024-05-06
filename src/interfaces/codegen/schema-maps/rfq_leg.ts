import { type SchemaPairMap } from './types'

// Schema map for the 'RFQ_LEG' struct.
export const RFQ_LEG_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    size_no_decimal: 'sn',
    base_ratio: 'br',
    is_bid: 'ib'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    sn: 'size_no_decimal',
    br: 'base_ratio',
    ib: 'is_bid'
  }
})
