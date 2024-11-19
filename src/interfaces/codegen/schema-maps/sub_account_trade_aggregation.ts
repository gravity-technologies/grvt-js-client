import { type SchemaPairMap } from './types'

// Schema map for the 'SUB_ACCOUNT_TRADE_AGGREGATION' struct.
export const SUB_ACCOUNT_TRADE_AGGREGATION_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    total_fee: 'tf',
    total_trade_volume: 'tt',
    num_traded: 'nt'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    tf: 'total_fee',
    tt: 'total_trade_volume',
    nt: 'num_traded'
  }
})
