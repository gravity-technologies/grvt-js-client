import { type SchemaPairMap } from './types'

// Schema map for the 'POSITIONS' struct.
export const POSITIONS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    sub_account_id: 'sa',
    instrument: 'i',
    balance: 'b',
    value: 'v',
    entry_price: 'ep',
    exit_price: 'ep1',
    mark_price: 'mp',
    unrealized_pnl: 'up',
    realized_pnl: 'rp',
    pnl: 'p',
    roi: 'r'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    sa: 'sub_account_id',
    i: 'instrument',
    b: 'balance',
    v: 'value',
    ep: 'entry_price',
    ep1: 'exit_price',
    mp: 'mark_price',
    up: 'unrealized_pnl',
    rp: 'realized_pnl',
    p: 'pnl',
    r: 'roi'
  }
})
