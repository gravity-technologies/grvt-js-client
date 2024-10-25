import { type SchemaPairMap } from './types'

// Schema map for the 'JSONRPC_REQUEST' struct.
export const JSONRPC_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    jsonrpc: 'j',
    method: 'm',
    params: 'p',
    id: 'i'
  },
  LITE_TO_FULL: {
    j: 'jsonrpc',
    m: 'method',
    p: 'params',
    i: 'id'
  }
})
