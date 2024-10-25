import { type SchemaPairMap } from './types'

// Schema map for the 'ERROR' struct.
export const ERROR_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    code: 'c',
    message: 'm'
  },
  LITE_TO_FULL: {
    c: 'code',
    m: 'message'
  }
})
