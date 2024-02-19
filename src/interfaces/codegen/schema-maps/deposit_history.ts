import { type SchemaPairMap } from './types'
import { SIGNATURE_MAP } from './signature'

// Schema map for the 'DEPOSIT_HISTORY' struct.
export const DEPOSIT_HISTORY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    tx_id: 'ti',
    from_eth_address: 'fe',
    to_account_id: 'ta',
    token_currency: 'tc',
    num_tokens: 'nt',
    signature: ['s', SIGNATURE_MAP.FULL_TO_LITE],
    event_time: 'et'
  },
  LITE_TO_FULL: {
    ti: 'tx_id',
    fe: 'from_eth_address',
    ta: 'to_account_id',
    tc: 'token_currency',
    nt: 'num_tokens',
    s: ['signature', SIGNATURE_MAP.LITE_TO_FULL],
    et: 'event_time'
  }
})
