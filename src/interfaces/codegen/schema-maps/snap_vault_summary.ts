import { type SchemaPairMap } from './types'
import { LP_INFO_ENTRY_MAP } from './lp_info_entry'

// Schema map for the 'SNAP_VAULT_SUMMARY' struct.
export const SNAP_VAULT_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    event_time: 'et',
    start_interval: 'si',
    vault_id: 'vi',
    lp_infos: ['li', [LP_INFO_ENTRY_MAP.FULL_TO_LITE]],
    total_lp_token_supply: 'tl',
    share_price: 'sp',
    reward_sharing_ratio_centi_beeps: 'rs'
  },
  LITE_TO_FULL: {
    et: 'event_time',
    si: 'start_interval',
    vi: 'vault_id',
    li: ['lp_infos', [LP_INFO_ENTRY_MAP.LITE_TO_FULL]],
    tl: 'total_lp_token_supply',
    sp: 'share_price',
    rs: 'reward_sharing_ratio_centi_beeps'
  }
})
