import { type SchemaPairMap } from './types'

// Schema map for the 'LP_SNAPSHOT' struct.
export const LP_SNAPSHOT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    lp_asset: 'la',
    underlying_multiplier: 'um',
    maker_trading_volume: 'mt',
    bid_fast_market_multiplier: 'bf',
    ask_fast_market_multiplier: 'af',
    liquidity_score: 'ls',
    calculate_at: 'ca'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    la: 'lp_asset',
    um: 'underlying_multiplier',
    mt: 'maker_trading_volume',
    bf: 'bid_fast_market_multiplier',
    af: 'ask_fast_market_multiplier',
    ls: 'liquidity_score',
    ca: 'calculate_at'
  }
})
