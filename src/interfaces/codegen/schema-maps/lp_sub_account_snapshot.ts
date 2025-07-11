import { type SchemaPairMap } from './types'

// Schema map for the 'LP_SUB_ACCOUNT_SNAPSHOT' struct.
export const LP_SUB_ACCOUNT_SNAPSHOT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    sub_account_id: 'sa',
    is_vault: 'iv',
    main_account_id: 'ma',
    lp_asset: 'la',
    underlying_multiplier: 'um',
    maker_trading_volume: 'mt',
    bid_fast_market_multiplier: 'bf',
    bid_prices: 'bp',
    bid_sizes: 'bs',
    bid_depth_scores: 'bd',
    bid_spread_scores: 'bs1',
    ask_fast_market_multiplier: 'af',
    ask_prices: 'ap',
    ask_sizes: 'as',
    ask_depth_scores: 'ad',
    ask_spread_scores: 'as1',
    liquidity_score: 'ls',
    calculate_at: 'ca'
  },
  LITE_TO_FULL: {
    sa: 'sub_account_id',
    iv: 'is_vault',
    ma: 'main_account_id',
    la: 'lp_asset',
    um: 'underlying_multiplier',
    mt: 'maker_trading_volume',
    bf: 'bid_fast_market_multiplier',
    bp: 'bid_prices',
    bs: 'bid_sizes',
    bd: 'bid_depth_scores',
    bs1: 'bid_spread_scores',
    af: 'ask_fast_market_multiplier',
    ap: 'ask_prices',
    as: 'ask_sizes',
    ad: 'ask_depth_scores',
    as1: 'ask_spread_scores',
    ls: 'liquidity_score',
    ca: 'calculate_at'
  }
})
