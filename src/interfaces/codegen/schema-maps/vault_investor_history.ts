import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_INVESTOR_HISTORY' struct.
export const VAULT_INVESTOR_HISTORY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    main_account_id: 'ma',
    vault_id: 'vi',
    is_investing: 'ii',
    price: 'p',
    size: 's',
    realized_pnl: 'rp',
    performance_fee: 'pf'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    ma: 'main_account_id',
    vi: 'vault_id',
    ii: 'is_investing',
    p: 'price',
    s: 'size',
    rp: 'realized_pnl',
    pf: 'performance_fee'
  }
})
