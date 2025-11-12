import { type SchemaPairMap } from './types'

// Schema map for the 'ADMIN_REWARD_EPOCH_METADATA' struct.
export const ADMIN_REWARD_EPOCH_METADATA_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    total_trading_volume: 'tt',
    visible_emitted_points: 've'
  },
  LITE_TO_FULL: {
    tt: 'total_trading_volume',
    ve: 'visible_emitted_points'
  }
})
