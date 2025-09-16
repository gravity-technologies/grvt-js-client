import { type SchemaPairMap } from './types'

// Schema map for the 'REWARD_ACCOUNT_MULTIPLIER' struct.
export const REWARD_ACCOUNT_MULTIPLIER_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    id: 'i',
    metric: 'm',
    off_chain_account_id: 'oc',
    account_type: 'at',
    multiplier: 'm1',
    effective_epoch_start: 'ee',
    effective_epoch_end: 'ee1',
    status: 's',
    created_by_id: 'cb',
    create_time: 'ct',
    update_time: 'ut'
  },
  LITE_TO_FULL: {
    i: 'id',
    m: 'metric',
    oc: 'off_chain_account_id',
    at: 'account_type',
    m1: 'multiplier',
    ee: 'effective_epoch_start',
    ee1: 'effective_epoch_end',
    s: 'status',
    cb: 'created_by_id',
    ct: 'create_time',
    ut: 'update_time'
  }
})
