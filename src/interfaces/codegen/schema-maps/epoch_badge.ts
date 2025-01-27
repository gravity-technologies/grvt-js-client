import { type SchemaPairMap } from './types'

// Schema map for the 'EPOCH_BADGE' struct.
export const EPOCH_BADGE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    account_id: 'ai',
    main_account_id: 'ma',
    type: 't',
    epoch: 'e',
    epoch_start_time: 'es',
    epoch_end_time: 'ee',
    badge: 'b',
    distributed_badges: 'db',
    total_point: 'tp',
    rank: 'r',
    claimed_at: 'ca'
  },
  LITE_TO_FULL: {
    ai: 'account_id',
    ma: 'main_account_id',
    t: 'type',
    e: 'epoch',
    es: 'epoch_start_time',
    ee: 'epoch_end_time',
    b: 'badge',
    db: 'distributed_badges',
    tp: 'total_point',
    r: 'rank',
    ca: 'claimed_at'
  }
})
