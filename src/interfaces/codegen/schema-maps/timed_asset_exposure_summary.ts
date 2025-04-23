import { type SchemaPairMap } from './types'
import { ASSET_EXPOSURE_SUMMARY_MAP } from './asset_exposure_summary'

// Schema map for the 'TIMED_ASSET_EXPOSURE_SUMMARY' struct.
export const TIMED_ASSET_EXPOSURE_SUMMARY_MAP: SchemaPairMap = Object.freeze({
  FULL_TO_LITE: {
    start_interval: 'si',
    asset_exposures: ['ae', [ASSET_EXPOSURE_SUMMARY_MAP.FULL_TO_LITE]]
  },
  LITE_TO_FULL: {
    si: 'start_interval',
    ae: ['asset_exposures', [ASSET_EXPOSURE_SUMMARY_MAP.LITE_TO_FULL]]
  }
})
