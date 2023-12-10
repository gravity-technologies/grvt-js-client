import { type SchemaPairMap } from './types'
import { ASSET_MAP } from './asset'

// Schema map for the 'POSITIONS' struct.
export const POSITIONS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    asset: ['a', ASSET_MAP.FULL_TO_LITE],
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
    a: ['asset', ASSET_MAP.LITE_TO_FULL],
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
