import { type SchemaPairMap } from './types'

// Schema map for the 'API_VAULT_INVESTOR_HISTORY' struct.
export const API_VAULT_INVESTOR_HISTORY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    off_chain_account_id: 'oc',
    vault_id: 'vi',
    type: 't',
    price: 'p',
    size: 's',
    realized_pnl: 'rp',
    performance_fee: 'pf'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    oc: 'off_chain_account_id',
    vi: 'vault_id',
    t: 'type',
    p: 'price',
    s: 'size',
    rp: 'realized_pnl',
    pf: 'performance_fee'
  }
})
