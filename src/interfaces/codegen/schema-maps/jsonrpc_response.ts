import { type SchemaPairMap } from './types'
import { ERROR_MAP } from './error'

// Schema map for the 'JSONRPC_RESPONSE' struct.
export const JSONRPC_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    jsonrpc: 'j',
    result: 'r',
    error: ['e', ERROR_MAP.FULL_TO_LITE],
    id: 'i',
    method: 'm'
  },
  LITE_TO_FULL: {
    j: 'jsonrpc',
    r: 'result',
    e: ['error', ERROR_MAP.LITE_TO_FULL],
    i: 'id',
    m: 'method'
  }
})
