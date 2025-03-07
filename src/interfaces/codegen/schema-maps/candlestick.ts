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
    volume_b: 'vb',
    volume_q: 'vq',
    trades: 't',
    instrument: 'i'
  },
  LITE_TO_FULL: {
    ot: 'open_time',
    ct: 'close_time',
    o: 'open',
    c: 'close',
    h: 'high',
    l: 'low',
    vb: 'volume_b',
    vq: 'volume_q',
    t: 'trades',
    i: 'instrument'
  }
})
