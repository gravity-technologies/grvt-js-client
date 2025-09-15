import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'WITHDRAWAL_HISTORY' struct.
export const WITHDRAWAL_HISTORY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    tx_id: 'ti',
    from_account_id: 'fa',
    to_eth_address: 'te',
    currency: 'c',
    num_tokens: 'nt',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE],
    event_time: 'et',
    l_1_hash: 'l1',
    l_2_hash: 'l2'
  },
  LITE_TO_FULL: {
    ti: 'tx_id',
    fa: 'from_account_id',
    te: 'to_eth_address',
    c: 'currency',
    nt: 'num_tokens',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL],
    et: 'event_time',
    l1: 'l_1_hash',
    l2: 'l_2_hash'
  }
})
