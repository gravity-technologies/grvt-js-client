import { type SchemaPairMap } from './types'

// Schema map for the 'API_CATEGORY_AFFINITY_SCORE_REQUEST' struct.
export const API_CATEGORY_AFFINITY_SCORE_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_time: 'st',
    end_time: 'et'
  },
  LITE_TO_FULL: {
    st: 'start_time',
    et: 'end_time'
  }
})
