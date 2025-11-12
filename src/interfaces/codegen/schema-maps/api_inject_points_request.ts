import { type SchemaPairMap } from './types'
import { INJECTED_POINT_REQUEST_ELEMENT_MAP } from './injected_point_request_element'

// Schema map for the 'API_INJECT_POINTS_REQUEST' struct.
export const API_INJECT_POINTS_REQUEST_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    injections: ['i', [INJECTED_POINT_REQUEST_ELEMENT_MAP.FULL_TO_LITE]],
    reason: 'r'
  },
  LITE_TO_FULL: {
    i: ['injections', [INJECTED_POINT_REQUEST_ELEMENT_MAP.LITE_TO_FULL]],
    r: 'reason'
  }
})
