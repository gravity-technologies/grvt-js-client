import { type SchemaPairMap } from './types'

// Schema map for the 'INSTRUMENT' struct.
export const INSTRUMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    asset_id: 'ai',
    underlying: 'u',
    quote: 'q',
    kind: 'k',
    expiry: 'e',
    strike_price: 'sp',
    venues: 'v',
    settlement_period: 'sp1',
    underlying_decimals: 'ud',
    quote_decimals: 'qd',
    tick_size: 'ts',
    min_size: 'ms',
    min_block_trade_size: 'mb',
    create_time: 'ct'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    ai: 'asset_id',
    u: 'underlying',
    q: 'quote',
    k: 'kind',
    e: 'expiry',
    sp: 'strike_price',
    v: 'venues',
    sp1: 'settlement_period',
    ud: 'underlying_decimals',
    qd: 'quote_decimals',
    ts: 'tick_size',
    ms: 'min_size',
    mb: 'min_block_trade_size',
    ct: 'create_time'
  }
})
