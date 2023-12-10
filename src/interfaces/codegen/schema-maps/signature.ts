import { type SchemaPairMap } from './types'

// Schema map for the 'SIGNATURE' struct.
export const SIGNATURE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    signer: 's',
    r: 'r',
    s: 's1',
    v: 'v',
    expiration: 'e',
    nonce: 'n'
  },
  LITE_TO_FULL: {
    s: 'signer',
    r: 'r',
    s1: 's',
    v: 'v',
    e: 'expiration',
    n: 'nonce'
  }
})
