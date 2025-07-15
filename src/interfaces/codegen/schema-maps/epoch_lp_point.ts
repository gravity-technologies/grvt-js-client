import { type SchemaPairMap } from './types'

// Schema map for the 'EPOCH_LP_POINT' struct.
export const EPOCH_LP_POINT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    main_account_id: 'ma',
    off_chain_account_id: 'oc',
    lp_asset: 'la',
    liquidity_score: 'ls',
    vault_liquidity_score: 'vl'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    ma: 'main_account_id',
    oc: 'off_chain_account_id',
    la: 'lp_asset',
    ls: 'liquidity_score',
    vl: 'vault_liquidity_score'
  }
})
