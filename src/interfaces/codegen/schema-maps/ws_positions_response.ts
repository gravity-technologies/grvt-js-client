import { type SchemaPairMap } from './types'
import { POSITIONS_MAP } from './api_position'

// Schema map for the 'WS_POSITIONS_RESPONSE' struct.
export const WS_POSITIONS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    s: 's',
    n: 'n',
    f: ['f', POSITIONS_MAP.FULL_TO_LITE]
  },
  LITE_TO_FULL: {
    s: 's',
    n: 'n',
    f: ['f', POSITIONS_MAP.LITE_TO_FULL]
  }
})
