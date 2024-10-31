import { type SchemaPairMap } from './types'

// Schema map for the 'INSTRUMENT' struct.
export const INSTRUMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    instrument_hash: 'ih',
    base: 'b',
    quote: 'q',
    kind: 'k',
    expiry: 'e',
    strike_price: 'sp',
    venues: 'v',
    settlement_period: 'sp1',
    base_decimals: 'bd',
    quote_decimals: 'qd',
    tick_size: 'ts',
    min_size: 'ms',
    min_block_trade_size: 'mb',
    create_time: 'ct',
    max_position_size: 'mp'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    ih: 'instrument_hash',
    b: 'base',
    q: 'quote',
    k: 'kind',
    e: 'expiry',
    sp: 'strike_price',
    v: 'venues',
    sp1: 'settlement_period',
    bd: 'base_decimals',
    qd: 'quote_decimals',
    ts: 'tick_size',
    ms: 'min_size',
    mb: 'min_block_trade_size',
    ct: 'create_time',
    mp: 'max_position_size'
  }
})
