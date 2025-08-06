import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_USER_VAULT_REWARD_POINT_RESPONSE' struct.
export const API_GET_USER_VAULT_REWARD_POINT_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    ecosystem_point: 'ep',
    trader_point: 'tp',
    lp_point: 'lp'
  },
  LITE_TO_FULL: {
    ep: 'ecosystem_point',
    tp: 'trader_point',
    lp: 'lp_point'
  }
})
