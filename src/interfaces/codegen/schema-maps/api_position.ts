import { type SchemaPairMap } from './types'

// Schema map for the 'POSITIONS' struct.
export const POSITIONS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    sub_account_id: 'sa',
    instrument: 'i',
    size: 's',
    notional: 'n',
    entry_price: 'ep',
    exit_price: 'ep1',
    mark_price: 'mp',
    unrealized_pnl: 'up',
    realized_pnl: 'rp',
    total_pnl: 'tp',
    roi: 'r',
    quote_index_price: 'qi',
    est_liquidation_price: 'el'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    sa: 'sub_account_id',
    i: 'instrument',
    s: 'size',
    n: 'notional',
    ep: 'entry_price',
    ep1: 'exit_price',
    mp: 'mark_price',
    up: 'unrealized_pnl',
    rp: 'realized_pnl',
    tp: 'total_pnl',
    r: 'roi',
    qi: 'quote_index_price',
    el: 'est_liquidation_price'
  }
})
