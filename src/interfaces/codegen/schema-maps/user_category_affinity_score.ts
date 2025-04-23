import { type SchemaPairMap } from './types'

// Schema map for the 'USER_CATEGORY_AFFINITY_SCORE' struct.
export const USER_CATEGORY_AFFINITY_SCORE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai',
    category_id: 'ci',
    affinity_score: 'as'
  },
  LITE_TO_FULL: {
    ai: 'account_id',
    ci: 'category_id',
    as: 'affinity_score'
  }
})
