import { type SchemaPairMap } from './types'

// Schema map for the 'LP_POINT' struct.
export const LP_POINT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    main_account_id: 'ma',
    liquidity_score: 'ls',
    rank: 'r'
  },
  LITE_TO_FULL: {
    ma: 'main_account_id',
    ls: 'liquidity_score',
    r: 'rank'
  }
})
