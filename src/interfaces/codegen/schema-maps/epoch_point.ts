import { type SchemaPairMap } from './types'

// Schema map for the 'EPOCH_POINT' struct.
export const EPOCH_POINT_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    epoch: 'e',
    off_chain_account_id: 'oc',
    point: 'p',
    reserve_point: 'rp'
  },
  LITE_TO_FULL: {
    e: 'epoch',
    oc: 'off_chain_account_id',
    p: 'point',
    rp: 'reserve_point'
  }
})
