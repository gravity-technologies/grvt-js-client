import { type SchemaPairMap } from './types'

// Schema map for the 'API_SOCIALIZED_LOSS_STATUS_RESPONSE' struct.
export const API_SOCIALIZED_LOSS_STATUS_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    is_active: 'ia',
    haircut_ratio: 'hr'
  },
  LITE_TO_FULL: {
    ia: 'is_active',
    hr: 'haircut_ratio'
  }
})
