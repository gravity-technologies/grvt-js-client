import { type SchemaPairMap } from './types'

// Schema map for the 'INSTRUMENT' struct.
export const INSTRUMENT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: 'a',
    instrument_name: 'in',
    venues: 'v',
    settlement_period: 'sp',
    underlying_decimals: 'ud',
    quote_decimals: 'qd',
    tick_size: 'ts',
    min_size: 'ms',
    min_block_trade_size: 'mb',
    create_time: 'ct'
  },
  LITE_TO_FULL: {
    a: 'asset',
    in: 'instrument_name',
    v: 'venues',
    sp: 'settlement_period',
    ud: 'underlying_decimals',
    qd: 'quote_decimals',
    ts: 'tick_size',
    ms: 'min_size',
    mb: 'min_block_trade_size',
    ct: 'create_time'
  }
})
