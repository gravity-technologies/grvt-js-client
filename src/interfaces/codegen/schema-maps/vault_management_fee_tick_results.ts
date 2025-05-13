import { type SchemaPairMap } from './types'

// Schema map for the 'VAULT_MANAGEMENT_FEE_TICK_RESULTS' struct.
export const VAULT_MANAGEMENT_FEE_TICK_RESULTS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    vault_total_equity: 'vt',
    vault_share_price: 'vs',
    fees_charged: 'fc'
  },
  LITE_TO_FULL: {
    vt: 'vault_total_equity',
    vs: 'vault_share_price',
    fc: 'fees_charged'
  }
})
