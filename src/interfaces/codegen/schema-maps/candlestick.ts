import { type SchemaPairMap } from './types'

// Schema map for the 'CANDLESTICK' struct.
export const CANDLESTICK_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    open_time: 'ot',
    close_time: 'ct',
    open: 'o',
    close: 'c',
    high: 'h',
    low: 'l',
    volume: 'v',
    quote_volume: 'qv',
    trades: 't'
  },
  LITE_TO_FULL: {
    ot: 'open_time',
    ct: 'close_time',
    o: 'open',
    c: 'close',
    h: 'high',
    l: 'low',
    v: 'volume',
    qv: 'quote_volume',
    t: 'trades'
  }
})
