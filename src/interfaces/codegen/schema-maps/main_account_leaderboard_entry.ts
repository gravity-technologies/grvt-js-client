import { type SchemaPairMap } from './types'

// Schema map for the 'MAIN_ACCOUNT_LEADERBOARD_ENTRY' struct.
export const MAIN_ACCOUNT_LEADERBOARD_ENTRY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    total_fee: 'tf',
    total_trade_volume: 'tt',
    num_traded: 'nt',
    positive_fee: 'pf',
    realized_pnl: 'rp'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    tf: 'total_fee',
    tt: 'total_trade_volume',
    nt: 'num_traded',
    pf: 'positive_fee',
    rp: 'realized_pnl'
  }
})
