import { type SchemaPairMap } from './types'

// Schema map for the 'RESERVE_POINT_INFORMATION' struct.
export const RESERVE_POINT_INFORMATION_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    cumulative_reserved_points: 'cr',
    available_reserve_points: 'ar'
  },
  LITE_TO_FULL: {
    cr: 'cumulative_reserved_points',
    ar: 'available_reserve_points'
  }
})
