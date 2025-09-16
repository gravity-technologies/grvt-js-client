import { type SchemaPairMap } from './types'

// Schema map for the 'EPOCH_POINT_STATS' struct.
export const EPOCH_POINT_STATS_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    point: 'p'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    p: 'point'
  }
})
