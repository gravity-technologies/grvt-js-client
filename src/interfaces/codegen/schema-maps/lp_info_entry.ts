import { type SchemaPairMap } from './types'
import { VAULT_LP_INFO_MAP } from './vault_lp_info'

// Schema map for the 'LP_INFO_ENTRY' struct.
export const LP_INFO_ENTRY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    lp_address: 'la',
    info: ['i', VAULT_LP_INFO_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    la: 'lp_address',
    i: ['info', VAULT_LP_INFO_MAP.LITE_TO_FULL]
  }
})
