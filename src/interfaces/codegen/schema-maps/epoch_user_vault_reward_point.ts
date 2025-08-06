import { type SchemaPairMap } from './types'

// Schema map for the 'EPOCH_USER_VAULT_REWARD_POINT' struct.
export const EPOCH_USER_VAULT_REWARD_POINT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    ecosystem_point: 'ep',
    trader_point: 'tp',
    lp_point: 'lp'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    ep: 'ecosystem_point',
    tp: 'trader_point',
    lp: 'lp_point'
  }
})
