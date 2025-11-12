import { type SchemaPairMap } from './types'
import { EPOCH_POINT_BOOST_CONFIGURATION_MAP } from './epoch_point_boost_configuration'

// Schema map for the 'API_LIST_EPOCH_POINT_BOOST_CONFIGURATION_RESPONSE' struct.
export const API_LIST_EPOCH_POINT_BOOST_CONFIGURATION_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [EPOCH_POINT_BOOST_CONFIGURATION_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    r: ['result', [EPOCH_POINT_BOOST_CONFIGURATION_MAP.LITE_TO_FULL]]
  }
})
