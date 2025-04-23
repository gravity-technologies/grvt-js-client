import { type SchemaPairMap } from './types'

// Schema map for the 'POSITION_SUMMARY' struct.
export const POSITION_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    instrument: 'i',
    size: 's',
    notional: 'n',
    entry_price: 'ep',
    unrealized_pnl: 'up',
    realized_pnl: 'rp',
    total_pnl: 'tp',
    roi: 'r',
    quote_index_price: 'qi'
  },
  LITE_TO_FULL: {
    i: 'instrument',
    s: 'size',
    n: 'notional',
    ep: 'entry_price',
    up: 'unrealized_pnl',
    rp: 'realized_pnl',
    tp: 'total_pnl',
    r: 'roi',
    qi: 'quote_index_price'
  }
})
