import { type SchemaPairMap } from './types'
import { TIMED_ASSET_EXPOSURE_SUMMARY_MAP } from './timed_asset_exposure_summary'

// Schema map for the 'API_TIMED_ASSET_EXPOSURE_RESPONSE' struct.
export const API_TIMED_ASSET_EXPOSURE_RESPONSE_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    result: ['r', [TIMED_ASSET_EXPOSURE_SUMMARY_MAP.FULL_TO_LITE]],
    next: 'n'
  },
  LITE_TO_FULL: {
    r: ['result', [TIMED_ASSET_EXPOSURE_SUMMARY_MAP.LITE_TO_FULL]],
    n: 'next'
  }
})
