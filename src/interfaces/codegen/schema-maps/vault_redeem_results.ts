import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_REDEEM_RESULTS' struct.
export const VAULT_REDEEM_RESULTS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    token_index_price: 'ti',
    vault_total_equity: 'vt',
    vault_share_price: 'vs',
    currency: 'c',
    num_tokens: 'nt',
    avg_entry_price: 'ae',
    fees_charged: 'fc',
    realized_pnl: 'rp'
  },
  LITE_TO_FULL: {
    ti: 'token_index_price',
    vt: 'vault_total_equity',
    vs: 'vault_share_price',
    c: 'currency',
    nt: 'num_tokens',
    ae: 'avg_entry_price',
    fc: 'fees_charged',
    rp: 'realized_pnl'
  }
})
