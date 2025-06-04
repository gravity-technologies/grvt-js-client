import { type SchemaPairMap } from './types'

// Schema map for the 'SUB_ACCOUNT_TRADE_AGGREGATION' struct.
export const SUB_ACCOUNT_TRADE_AGGREGATION_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    total_fee: 'tf',
    total_trade_volume: 'tt',
    num_traded: 'nt',
    positive_fee: 'pf',
    signer: 's',
    realized_pnl: 'rp',
    source: 's1'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    tf: 'total_fee',
    tt: 'total_trade_volume',
    nt: 'num_traded',
    pf: 'positive_fee',
    s: 'signer',
    rp: 'realized_pnl',
    s1: 'source'
  }
})
