import { type SchemaPairMap } from './types'

// Schema map for the 'REWARD_REFERRAL_POINT' struct.
export const REWARD_REFERRAL_POINT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    off_chain_account_id: 'oc',
    epoch: 'e',
    point: 'p'
  },
  LITE_TO_FULL: {
    oc: 'off_chain_account_id',
    e: 'epoch',
    p: 'point'
  }
})
