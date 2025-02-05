import { type SchemaPairMap } from './types'

// Schema map for the 'EPOCH_BADGE_POINT_DISTRIBUTION' struct.
export const EPOCH_BADGE_POINT_DISTRIBUTION_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    badge: 'b',
    epoch: 'e',
    type: 't',
    min_point: 'mp',
    max_point: 'mp1',
    min_rank: 'mr',
    max_rank: 'mr1',
    total_point: 'tp',
    count: 'c'
  },
  LITE_TO_FULL: {
    b: 'badge',
    e: 'epoch',
    t: 'type',
    mp: 'min_point',
    mp1: 'max_point',
    mr: 'min_rank',
    mr1: 'max_rank',
    tp: 'total_point',
    c: 'count'
  }
})
