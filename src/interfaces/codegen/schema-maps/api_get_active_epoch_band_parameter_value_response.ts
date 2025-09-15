import { type SchemaPairMap } from './types'
import { REWARD_EPOCH_BAND_PARAMETER_MAP } from './reward_epoch_band_parameter'

// Schema map for the 'API_GET_ACTIVE_EPOCH_BAND_PARAMETER_VALUE_RESPONSE' struct.
export const API_GET_ACTIVE_EPOCH_BAND_PARAMETER_VALUE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [REWARD_EPOCH_BAND_PARAMETER_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [REWARD_EPOCH_BAND_PARAMETER_MAP.LITE_TO_FULL]]
  }
})
