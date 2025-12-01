import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_USER_EPOCH_POINT_STATS_RESPONSE' struct.
export const API_GET_USER_EPOCH_POINT_STATS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    epoch_point: 'ep',
    cumulative_point: 'cp',
    epoch_rank: 'er',
    cumulative_rank: 'cr',
    cumulative_rank_change: 'cr1',
    last_calculated_time: 'lc',
    epoch_referral_point: 'er1',
    cumulative_referral_point: 'cr2'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    ep: 'epoch_point',
    cp: 'cumulative_point',
    er: 'epoch_rank',
    cr: 'cumulative_rank',
    cr1: 'cumulative_rank_change',
    lc: 'last_calculated_time',
    er1: 'epoch_referral_point',
    cr2: 'cumulative_referral_point'
  }
})
