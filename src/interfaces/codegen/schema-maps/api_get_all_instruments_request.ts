import { type SchemaPairMap } from './types'

// Schema map for the 'API_GET_ALL_INSTRUMENTS_REQUEST' struct.
export const API_GET_ALL_INSTRUMENTS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    is_active: 'ia'
  },
  LITE_TO_FULL: {
    ia: 'is_active'
  }
})
