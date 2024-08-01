import { type SchemaPairMap } from './types'

// Schema map for the 'SUB_ACCOUNT_TRADE' struct.
export const SUB_ACCOUNT_TRADE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    sub_account_id: 'sa',
    instrument: 'i',
    total_fee: 'tf',
    total_trade_volume: 'tt'
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    sa: 'sub_account_id',
    i: 'instrument',
    tf: 'total_fee',
    tt: 'total_trade_volume'
  }
})
